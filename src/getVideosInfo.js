import ypi from 'youtube-playlist-info';

export default function getVideoIDs({ youTubeAPIKey, playlistID, maxResults }, onError, onSuccess) {
  const options = {
    maxResults,
  };

  ypi(youTubeAPIKey, playlistID, options)
    .then((items) => {
      onSuccess(items);
    })
    .catch(onError);
}
