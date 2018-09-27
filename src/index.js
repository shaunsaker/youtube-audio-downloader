import config from './config';
import getVideosInfo from './getVideosInfo';
import onError from './utils/onError';
import parseVideosList from './parseVideosList';
import downloadAudios from './downloadAudios';

const videoIDsPath = './src/resources/videoIDs.json';

function onGetVideosInfoSuccess(videos) {
  console.log('Successfully retrieved video IDs');
  parseVideosList(videos, videoIDsPath, onError, () => downloadAudios(videoIDsPath));
  // downloadAudios(videoIDsPath); // testing
}

const defaults = {
  playlistID: 'UU1UMshhDjWrHIDFWkVKZxbw',
  maxResults: 10,
};

function app(playlistID = defaults.playlistID, maxResults = defaults.maxResults) {
  const getVideosInfoOptions = {
    youTubeAPIKey: config.youTubeAPIKey,
    playlistID,
    maxResults: Number(maxResults),
  };

  getVideosInfo(getVideosInfoOptions, onError, onGetVideosInfoSuccess);
}

export default app;
