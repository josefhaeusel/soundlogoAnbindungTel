import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  Req,
  Get,
  Logger,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ChordRetrievalAiService } from './chord_retrieval_ai.service';
import { Response, Request } from 'express';
import { Session } from 'express-session';
import * as fs from 'fs';
import * as path from 'path';
import { AudioVideoService } from '../audio-video/audio-video.service';
import { ComputerVisionService } from '../computer_vision/computer_vision.service';

export interface ISession extends Session {
  tempOriginalVideoFilePath?: string;
  appendedAnimation?: boolean;
  convertedVideo?: boolean;
}

@Controller('chord-retrieval-ai')
export class ChordRetrievalAiController {
  private readonly logger = new Logger(ChordRetrievalAiController.name);

  constructor(
    private readonly chordRetrievalAiService: ChordRetrievalAiService,
    private readonly audioVideoService: AudioVideoService,
    private readonly computerVisionService: ComputerVisionService,
  ) {}

  @Get('progress')
  progress(@Req() req: Request, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Accel-Buffering', 'no');

    const sendProgress = (message: string) => {
      this.logger.log(`Progress: ${message}`);
      res.write(`data: ${JSON.stringify({ message })}\n\n`);
    };

    req.on('close', () => {
      this.logger.log('Client connection closed');
      res.end();
    });

    req.app.set('sendProgress', sendProgress);
  }

  @Post('uploadVideo')
  @UseInterceptors(FileInterceptor('file'))
  async videoHandler(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    const sendProgress = request.app.get('sendProgress');

    let analysisResult = { audioAnalysis: {}, videoAnalysis: {convertedVideo:null}, videoOutputFile: null };
    let audioAnalysisResult;
    let videoAnalysisResult;
    let tempAudioFilePath = null;

    try {
      this.logger.log('Starting video upload handling');

      let tempOriginalVideoFilePath = path.join(
        __dirname,
        '../../temp_uploads/video',
        file.originalname,
      );
      let tempVideoOutputFilePath


      this.logger.log(tempOriginalVideoFilePath)
      await fs.writeFileSync(tempOriginalVideoFilePath, file.buffer);

      this.logger.log('Retrieving Video Data...');
      sendProgress('Retrieving Video Data...');
      const videoData = await this.audioVideoService.getVideoData(tempOriginalVideoFilePath);
      this.logger.debug(videoData);

      switch (true) {
        case videoData.supported_resolution === false && videoData.supported_ratio === false:
          throw new Error('ResolutionAndRatioNotSupported');
        case videoData.supported_resolution === false && videoData.supported_ratio === true:
          throw new Error('ResolutionNotSupported');
        case videoData.supported_resolution === true && videoData.supported_ratio === false:
          throw new Error('RatioNotSupported');
      }

      if (videoData.codec_name != "h264" && videoData.codec_name != "h265" || !tempOriginalVideoFilePath.endsWith(".mp4")) {
        tempOriginalVideoFilePath = await this.audioVideoService.convert(tempOriginalVideoFilePath);
        (request.session as ISession).convertedVideo = true;
        this.logger.log('Converting Video Format...');
        sendProgress('Converting Video Format...');
      } else {
        (request.session as ISession).convertedVideo = false;
      }

      this.logger.log('Splitting Audio from Video...');
      sendProgress('Splitting Audio from Video...');

      try {
        const splitFiles = await this.audioVideoService.split(tempOriginalVideoFilePath);
        tempVideoOutputFilePath = splitFiles.video
        tempAudioFilePath = splitFiles.audio
      } catch (error) {
        this.logger.error('Error during audio/video splitting', error.stack);
      }

      sendProgress('Retrieving Key and Loudness...');
      this.logger.log('Retrieving Key and Loudness...');

      if (tempAudioFilePath != null) {
        audioAnalysisResult = await this.chordRetrievalAiService.analyzeSong(tempAudioFilePath);
      } else {
        audioAnalysisResult = await this.chordRetrievalAiService.analyzeSong(tempOriginalVideoFilePath);
      }

      sendProgress('Detecting T-Outro Animation...');
      this.logger.log('Detecting T-Outro Animation...');
      videoAnalysisResult = await this.computerVisionService.analyzeVideo(tempVideoOutputFilePath);
      videoAnalysisResult.inputVideoData = videoData;

      this.logger.debug(videoAnalysisResult);

      if (videoAnalysisResult.appendAnimation == true) {
        this.logger.log("Appending T-Outro Animation...");
        sendProgress("Appending T-Outro Animation...");
        tempVideoOutputFilePath = await this.audioVideoService.appendAnimation(tempVideoOutputFilePath, videoData, true);
      }

      analysisResult.audioAnalysis = audioAnalysisResult;
      analysisResult.videoAnalysis = videoAnalysisResult;
      analysisResult.videoOutputFile = tempVideoOutputFilePath;
      analysisResult.videoAnalysis.convertedVideo = (request.session as ISession).convertedVideo;

      (request.session as ISession).tempOriginalVideoFilePath = tempOriginalVideoFilePath;
      (request.session as ISession).appendedAnimation = videoAnalysisResult.appendAnimation;


      sendProgress('Done (on server-side).');
      this.logger.log('Processing done');
      response.json(analysisResult);
    } catch (error) {
      this.logger.warn('Error during video handling', error.stack);
      if (error.message === 'ResolutionAndRatioNotSupported') {
        response.status(400).json({ error: 'Resolution and display ratio not supported.' });
      } else if (error.message === 'ResolutionNotSupported') {
        response.status(400).json({ error: 'Resolution not supported.' });
      } else if (error.message === 'RatioNotSupported') {
        response.status(400).json({ error: 'Display ratio not supported.' });
      } else {
        response.status(500).json({ error: error.message });
      }
    }
  }

  @Post('uploadRenderedAudio')
  @UseInterceptors(FileInterceptor('file'))
  async audioHandler(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    try {
      this.logger.log('Starting audio upload handling');
      this.logger.log(file.originalname)

      const tempAudioFilePath = path.join(
        __dirname,
        '../../temp_uploads/audio',
        file.originalname,
      );

      fs.writeFileSync(tempAudioFilePath, file.buffer);

      const appendedAnimation = (request.session as ISession).appendedAnimation;
      const tempOriginalVideoFilePath = (request.session as ISession).tempOriginalVideoFilePath;

      const tempVideoFilePath = path.join(
        __dirname,
        '../../temp_uploads/video',
        tempOriginalVideoFilePath,
      );

      const renderedResult = await this.audioVideoService.join(
        tempOriginalVideoFilePath,
        tempAudioFilePath,
        true,
        appendedAnimation,
      );

      //fs.unlinkSync(tempAudioFilePath);

      this.logger.log(`Audio ${tempAudioFilePath} and Video ${tempVideoFilePath} joined as ${renderedResult}`);
      response.json({ renderedResult: renderedResult });
    } catch (error) {
      this.logger.error('Error during audio handling', error.stack);
      response.status(500).json({ error: error.message });
    }
  }
}
