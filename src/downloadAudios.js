import fs from 'fs';
import async from 'async';
import writeFile from './utils/writeFile';
import readFile from './utils/readFile';
import onError from './utils/onError';
import onProgress from './utils/onProgress';
import diffArrays from './utils/diffArrays';
import downloadAudio from './downloadAudio';
import saveDownloadedVideoID from './saveDownloadedVideoID';

function getAudios(videoIDs, downloadedVideoIDsPath) {
  readFile(downloadedVideoIDsPath, onError, (downloadedVideoIDsData) => {
    // Filtering of downloadedVideoIDs
    const downloadedVideoIDs = JSON.parse(downloadedVideoIDsData);
    const filteredVideoIDs = diffArrays(videoIDs, downloadedVideoIDs);

    async.eachSeries(
      filteredVideoIDs,
      (videoID, callback) => {
        downloadAudio(videoID, onError, onProgress, () => {
          saveDownloadedVideoID(videoID, onError, () => {
            callback(null);
          });
        });
      },
      (error) => {
        if (error) {
          onError(error);
        } else {
          console.log('All files have been downloaded successfully');
        }
      },
    );
  });
}

export default function downloadAudios(videoIDsPath) {
  readFile(videoIDsPath, onError, (data) => {
    const videoIDs = JSON.parse(data);
    const downloadedVideoIDsPath = './resources/downloadedVideoIDs.json';

    if (!fs.existsSync(downloadedVideoIDsPath)) {
      writeFile(downloadedVideoIDsPath, [], onError, () => {
        getAudios(videoIDs, downloadedVideoIDsPath);
      });
    } else {
      getAudios(videoIDs, downloadedVideoIDsPath);
    }
  });
}
