import YoutubeMp3Downloader from 'youtube-mp3-downloader';
import config from './config';

function downloadAudio(videoID, onError, onProgress, onAudioDownload) {
  console.log(`Fetching ${videoID}`);
  // Configure YoutubeMp3Downloader with your settings
  const YD = new YoutubeMp3Downloader({
    ffmpegPath: config.ffmpegPath, // Where is the FFmpeg binary located?
    outputPath: './output', // Where should the downloaded and encoded files be stored?
    youtubeVideoQuality: 'lowest', // What video quality should be used?
    queueParallelism: 1, // How many parallel downloads/encodes should be started?
    progressTimeout: 2000, // How long should be the interval of the progress reports
  });

  // Download video and save as MP3 file
  YD.download(videoID);

  YD.on('error', (error) => {
    onError(new Error(error));
  });

  YD.on('progress', onProgress);

  YD.on('finished', () => {
    console.log(`Downloaded ${videoID}`);
    onAudioDownload();
  });
}

export default downloadAudio;
