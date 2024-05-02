/*

Next Steps:
-Resoluations und Formate checken
-Ending Varianten im Timing rausfinden
-12 Tonarten

Rendering:
*/

//--- VueJS Part


const app = Vue.createApp({

    data() {
        return {

            currentLayer: "layer1",
            showModal: false,
            showWarningModal: false,

            playbackPosition: 0,
            sliderValue: 0,
            audioDuration: 0,
            soundlogoPosition: 0,

            logoDetectionMessage: "",

            isLoadingResult: false,
            isLoadingKey: true,
            soundlogoKeys: [
                { id: '0', key: '' },
                { id: '1', key: '' },
                { id: '2', key: '' }
            ],

            selectedKey: { id: '1', key: '' },

        }
    },

    mounted() {
        this.$refs.myVideo.addEventListener('play', this.startPlayback);
        this.$refs.myVideo.addEventListener('pause', this.stopPlayback);
    },

    methods: {
        setModal(show) {
            this.showModal = show
        },
        setWarningModal(show) {
            this.showWarningModal = show
        },

        async handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.currentLayer = "layer2";
                const analysis = await dropzoneHandlerVideo(file);
                this.audioDuration = audioPlayer.buffer.duration;

                const keys = analysis.keys
                this.videoData = analysis.videoAnalysis
                for (let x = 0; x < this.soundlogoKeys.length; x++) {
                    this.soundlogoKeys[x].key = keys[x];
                }
                this.updateLogoKey(id = '1');
                console.log(this.soundlogoKeys);

                await this.videoAnalysisHandler()
                setVideoMarker(this.soundlogoPosition);



            }
        },
        videoAnalysisHandler() {
            if (this.videoData.logo_start == "None") {
                this.soundlogoPosition = this.audioDuration - 6;
                let message

                let width = this.videoData.videoResolution[0]
                let height = this.videoData.videoResolution[1]
                if (width == 3840 && height == 2160 || width == 2160 && height == 3840) {
                    width /= 2;
                    height /= 2
                }
                if (width == 1920 && height == 1080 || width == 1080 && height == 1920) { message = `The standard Telekom Outro Animation was not detected. If the animation is outdate, consider updating it (Link).\n Do you want to proceed with the risk of falsely timing the Soundlogo?` }
                else {
                    message = `The standard Telekom Outro Animation was not detected. This is due to the videos irregular resolution ${height} x ${width}.\nAllowed Resolutions: (FullHD, UHD, 16:9, 9:16, 1:1).\n Do you want to proceed with the risk of falsely timing the Soundlogo?`
                }
                //TO DO Interface Logic
                this.logoDetectionMessage = message;
                this.showWarningModal = true;
            }
            else {
                this.soundlogoPosition = this.videoData.logo_start - 4.25
                this.showModal = true
                this.isLoadingKey = false;

            }
        },

        startPlayback() {
            this.playbackPosition = videoPlayer.currentTime();
            startTransports(this.playbackPosition, this.audioDuration, this.soundlogoPosition);
        },
        stopPlayback() {
            stopTransports();
        },
        updateLogoKey(id) {
            this.selectedKey.id = id;
            this.selectedKey.key = this.soundlogoKeys[id].key;
            console.log("Selected Key", this.selectedKey.key);
            //updateLogoBuffer(this.selectedKey.key )
        },
        async downloadVideo() {
            this.isLoadingResult = true;
            const renderedBuffer = await this.renderAudio();
            const videoFilepath = await uploadRenderedAudio_API(renderedBuffer);
            await downloadVideo(videoFilepath);
            this.isLoadingResult = false;
        },
        async downloadAudio() {
            this.isLoadingResult = true;
            const renderedBuffer = await this.renderAudio();
            downloadAudio(renderedBuffer);
            this.isLoadingResult = false;

        },
        async renderAudio() {
            const renderedBuffer = await Tone.Offline(async ({ transport }) => {
                await setupAudioNodes(transport.context);
                await extractAudioBuffer(video_url)
                //await updateLogoBuffer(this.selectedKey.key)

                scheduleAudio(this.audioDuration, 0, transport);
                scheduleLogoSound(this.audioDuration, 0, transport);
                transport.start();
            }, this.audioDuration)

            console.log(renderedBuffer)

            //Reinitialize regular Tone.Context
            await setupAudioNodes(Tone.getContext());

            return renderedBuffer

        }

    }
})

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('scale-')
app.mount('#app')


//Global Audio Players and Buffers
let logoPlayer
let logoBuffers
let video_url
let audioPlayer
let audioBuffer
let envelope
let videoPlayer

async function setup() {

    //Start Web-Audio Context w. User Gesture
    document.body.onclick = async () => {
        await Tone.start();
        await Tone.context.resume();

    }

    videoPlayer = videojs('myVideo');

    await setupAudioNodes(Tone.getContext());
}

async function setupAudioNodes(context) {
    envelope = await ampEnvelope();
    audioPlayer = await loadAudioplayer(context, envelope);
    await loadLogoBuffers();
    logoPlayer = await loadLogoPlayer(context);
}



function downloadAudio(buffer) {
    // Convert the buffer to a WAV Blob
    const wavBlob = convertToWav(buffer);

    // Create an object URL for the Blob
    const url = URL.createObjectURL(wavBlob);

    // Create a download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'soundlogoAnbindung.wav';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadVideo(filepath) {

}

// Simple WAV encoder function
// This is a basic example and might need adjustments based on your specific needs
function convertToWav(buffer) {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const subChunk1Size = 16; // for PCM
    const subChunk2Size = numChannels * buffer.length * 2; // 2 bytes per sample
    const chunkSize = 4 + (8 + subChunk1Size) + (8 + subChunk2Size);

    let offset = 0;
    const dataSize = 36 + subChunk2Size;
    const bufferArray = new ArrayBuffer(dataSize);
    const view = new DataView(bufferArray);

    // RIFF header
    writeString(view, offset, 'RIFF'); offset += 4;
    view.setUint32(offset, dataSize - 8, true); offset += 4;
    writeString(view, offset, 'WAVE'); offset += 4;

    // fmt sub-chunk
    writeString(view, offset, 'fmt '); offset += 4;
    view.setUint32(offset, subChunk1Size, true); offset += 4;
    view.setUint16(offset, format, true); offset += 2;
    view.setUint16(offset, numChannels, true); offset += 2;
    view.setUint32(offset, sampleRate, true); offset += 4;
    view.setUint32(offset, sampleRate * numChannels * 2, true); offset += 4;
    view.setUint16(offset, numChannels * 2, true); offset += 2;
    view.setUint16(offset, 16, true); offset += 2;

    // data sub-chunk
    writeString(view, offset, 'data'); offset += 4;
    view.setUint32(offset, subChunk2Size, true); offset += 4;

    // Write PCM samples
    for (let i = 0; i < buffer.length; i++) {
        for (let channel = 0; channel < numChannels; channel++) {
            let sample = buffer.getChannelData(channel)[i] * 0x7FFF;
            if (offset + 2 > dataSize) {
                break; // Prevent writing beyond the buffer size
            }
            view.setInt16(offset, sample, true);
            offset += 2;
        }
    }

    return new Blob([bufferArray], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

function startTransports(currentPosition, audioDuration, logoStart) {

    const transport = Tone.Transport

    scheduleAudio(audioDuration, currentPosition, logoStart, transport);
    scheduleLogoSound(audioDuration, currentPosition, logoStart, transport);

    videoPlayer.setCurrentTime = currentPosition;
    videoPlayer.play();
    transport.start();

    audioPlayer.onstop = function () {
        stopTransports()
    }
}

function stopTransports() {
    Tone.Transport.stop();
    Tone.Transport.cancel()
    audioPlayer.stop();
    logoPlayer.stop();
    videoPlayer.pause();
}

function scheduleAudio(audioDuration, currentPosition, logoStart, transport) {

    const secondsTillEnvStart = calculateEnvScheduleTime(audioDuration, currentPosition, logoStart);

    if (secondsTillEnvStart >= 0) {
        transport.schedule((time) => {
            audioPlayer.start(time, currentPosition);
            envelope.triggerAttack(time);
            console.log("Go Audio!");
        });
        transport.schedule((time) => {
            envelope.triggerRelease(time, time);
            console.log("Go Envelope!");
        }, secondsTillEnvStart);
    }

}

function scheduleLogoSound(audioDuration, currentPosition, logoStart, transport) {

    const secondsTillLogoStart = calculateLogoScheduleTime(audioDuration, currentPosition, logoStart);

    if (secondsTillLogoStart >= 0) {

        transport.schedule((time) => {
            logoPlayer.start(time);
            console.log("Go Logo!");
        }, `+${secondsTillLogoStart}`);

    } else if (secondsTillLogoStart < 0) {
        logoPlayer.start(Tone.immediate(), Math.abs(secondsTillLogoStart));
    }
}

function calculateLogoScheduleTime(audioDuration, currentPosition, logoStart) {
    const secondsTillStart = logoStart - currentPosition;
    return secondsTillStart;
}

function calculateEnvScheduleTime(audioDuration, currentPosition, logoStart) {
    const secondsTillStart = (logoStart + 1) - currentPosition;
    return secondsTillStart;
}

function forceStartBeforeLogo(audioDuration, currentPosition) {
    const timeTillStart = calculateLogoScheduleTime(audioDuration, currentPosition);
    let positionAtLogoStart;

    if (timeTillStart < 0) {
        positionAtLogoStart = currentPosition + timeTillStart;
        return positionAtLogoStart
    }
    else {
        return currentPosition
    }
}

async function loadLogoBuffers() {
    logoBuffers = new Tone.ToneAudioBuffers({
        A: "samples/soundlogos/TLS_A-3.wav",
        C: "samples/soundlogos/TLS_C-3.wav"
    })
}

async function loadLogoPlayer(Context, tonality = 'A') {

    const logoBuffer = logoBuffers.get('A');
    const newLogoPlayer = new Tone.Player({ url: logoBuffer, context: Context });

    newLogoPlayer.toDestination()

    return newLogoPlayer

}

async function loadAudioplayer(Context, Env, Filter, Filepath) {

    console.log("Loaded Audio:", Filepath)
    const newAudioPlayer = new Tone.Player({ url: audioBuffer, context: Context });

    if (Env) {
        newAudioPlayer.connect(Env);
    } else {
        newAudioPlayer.toDestination();
    }

    return newAudioPlayer

}

async function ampEnvelope() {
    const ampEnv = new Tone.AmplitudeEnvelope({
        attack: 0,
        decay: 0,
        sustain: 1.0,
        release: 2.4

    }).toDestination();

    ampEnv.releaseCurve = "cosine";

    return ampEnv
}

async function updateMainAudioBuffer(filepath) {
    console.log("Updated Main Audio Buffer:", filepath);
    const audioBuffer = new Tone.ToneAudioBuffer(filepath);
    audioPlayer.buffer = audioBuffer;
}

async function updateLogoBuffer(key) {
    console.log("Updated Logo Buffer Key:", key);
    const logoBuffer = logoBuffers.get(key);
    logoPlayer.buffer = logoBuffer;
}


async function uploadRenderedAudio_API(buffer) {

    const formData = await audioToWavFile(buffer);

    try {
        const response = await fetch('/chord-retrieval-ai/uploadRenderedAudio', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log('Audio uploaded successfully:', data);

        await downloadFile('/download/streamable/?file=' + data.renderedResult, data.renderedResult);

    } catch (error) {
        console.error('Error uploading audio:', error);
    }


    function audioToWavFile(buffer) {
        // Convert the buffer to a WAV Blob
        const wavBlob = convertToWav(buffer);

        // Convert the Blob to a File
        const audioFile = new File([wavBlob], 'soundlogoAnbindung.wav', { type: 'audio/wav' });

        // Create a FormData instance
        const formData = new FormData();

        // Append the File to FormData
        formData.append('file', audioFile);

        // Send the FormData to your backend
        return formData
    }

    function downloadFile(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = filename;
                document.body.appendChild(link); // Append to the body to trigger the download
                link.click();
                document.body.removeChild(link); // Optionally remove the link from the DOM
            })
            .catch(console.error);
    }
}

async function dropzoneHandlerVideo(file) {

    video_url = URL.createObjectURL(file);

    await videoPlayerHandling(video_url, file.name);

    const formData = new FormData();
    formData.append('file', file);

    analysis = await uploadVideo_API(formData);
    let likely_key = analysis.audioAnalysis.analysis.likely_key
    key = logoKeyMap[likely_key];

    console.log('Key:', key);
    const scale = keyToScale(key);
    //TODO await updateLogoBuffer(key);

    const videoAnalysis = analysis.videoAnalysis.analysis

    return { 'keys': scale, 'videoAnalysis': videoAnalysis }


    async function uploadVideo_API() {
        try {
            const response = await fetch('/chord-retrieval-ai/uploadVideo', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log("ANALYSIS RESULT", data)

            return data

        }
        catch (error) {
            display.value = error;
            console.error('Error:', error);
        }
    }
}

async function videoPlayerHandling(url, file) {

    let type = '';
    console.log(file)
    if (file.endsWith('.mp4')) {
        type = 'video/mp4';
    } else if (file.endsWith('.ogg')) {
        type = 'video/ogg';
    } else if (file.endsWith('.webm')) {
        type = 'video/webm';
    } else {
        throw new Error('Unsupported video format');
    }

    videoPlayer.src({
        type: type,
        src: url
    });

    await videoPlayer.load();

    await extractAudioBuffer(url);
}


async function extractAudioBuffer(url) {

    try {
        audioBuffer = await Tone.ToneAudioBuffer.fromUrl(url);
        console.log("Audio buffer loaded:", audioBuffer);

        audioPlayer.buffer = audioBuffer;
    } catch (error) {
        console.error("Failed to load audio buffer:", error);
    }
}

function setVideoMarker(soundlogoPosition) {
    var markers = [
        { time: soundlogoPosition, label: 'Soundlogo' },
    ];

    var total = videoPlayer.duration();
    var p = videoPlayer.controlBar.progressControl.children_[0].el_;

    for (var i = 0; i < markers.length; i++) {
        var left = (markers[i].time / total * 100) + '%';
        var time = markers[i].time;
        var el = document.createElement('div');
        el.className = 'vjs-marker';
        el.style.left = left;
        el.setAttribute('data-time', time);
        el.innerHTML = '<span>' + markers[i].label + '</span>';
        el.addEventListener('click', function () {
            videoPlayer.currentTime(this.getAttribute('data-time'));
        });
        p.appendChild(el);
    }
}

function keyToScale(key) {
    const keyArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    let keyIndex
    for (x = 0; x < keyArray.length; x++) {
        if (key === keyArray[x]) {
            keyIndex = x
        }
    };

    const subdominant_id = ((keyIndex + 5) % keyArray.length);
    const dominant_id = ((keyIndex + 7) % keyArray.length);

    const subdominant = keyArray[subdominant_id];
    const dominant = keyArray[dominant_id];

    const scale = [subdominant, key, dominant]
    console.log("Scale", scale)

    return scale

}

const logoKeyMap = {

    'A minor': 'C',
    'A# minor': 'C#',
    'B minor': 'D',
    'C minor': 'E',
    'C# minor': 'F',
    'D minor': 'F#',
    'D# minor': 'G',
    'E minor': 'G#',
    'F minor': 'A',
    'F# minor': 'A#',
    'G minor': 'B',
    'G# minor': 'C',

    'A major': 'A',
    'A# major': 'A#',
    'B major': 'B',
    'C major': 'C',
    'C# major': 'C#',
    'D major': 'D',
    'D# major': 'D#',
    'E major': 'E',
    'F major': 'F',
    'F# major': 'F#',
    'G major': 'G',
    'G# major': 'G#',

}


setup();