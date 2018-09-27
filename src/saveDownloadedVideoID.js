import readFile from './utils/readFile';
import writeFile from './utils/writeFile';

export default function saveDownloadedVideoID(videoID, handleError, handleSuccess) {
  const downloadedVideoIDsPath = './src/resources/downloadedVideoIDs.json';

  readFile(downloadedVideoIDsPath, handleError, (data) => {
    const downloadedVideoIDs = JSON.parse(data);
    downloadedVideoIDs.push(videoID);

    writeFile(downloadedVideoIDsPath, downloadedVideoIDs, handleError, () => {
      console.log(`Saved ${videoID}`);
      handleSuccess();
    });
  });
}
