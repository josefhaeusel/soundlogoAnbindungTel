import os, sys, json
import librosa
from keyfinder import Tonal_Fragment

if len(sys.argv) > 1:
    song_name = sys.argv[1]  # The first argument is the script name, so the song name is the second argument
    
    script_dir = os.path.dirname(os.path.realpath(__file__))

    audio_path = os.path.join(script_dir, '..', 'samples', song_name)

    y, sr = librosa.load(audio_path)
    y_harmonic, y_percussive = librosa.effects.hpss(y)
    duration = librosa.get_duration(y=y, sr=sr)

    if duration > 6:
        analysis_start = duration - 6  #  Analyze only the last X seconds
        analysis = Tonal_Fragment(y_harmonic, sr, analysis_start, duration).get_key_info()
    else:
        analysis = Tonal_Fragment(y_harmonic, sr).get_key_info()

    analysis = {
        "analyzed_audio": song_name,
        "analysis": analysis
    }

    print(json.dumps(analysis))

    sys.stdout.flush()

else:
    
    print("Please provide a song name as an argument.")



