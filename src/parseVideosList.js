import writeFile from './utils/writeFile';

export default function parseVideosList(data, videoIDsPath, onError, onSuccess) {
  const videos = data;
  const videoIDs = videos.map((item) => item.resourceId.videoId);

  writeFile(videoIDsPath, videoIDs, onError, onSuccess);
}
