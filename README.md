Downloads audio from YouTube using [youtube-playlist-info](https://github.com/benkaiser/youtube-playlist-info) and [youtube-mp3-downloader](https://github.com/ytb2mp3/youtube-mp3-downloader) under the hood.

# Setup

## Install ffmpeg

The simplest way is using HomeBrew. Need other methods? See the internet.

## Carry on, sir

```
brew install ffmpeg
git clone X
cd X
yarn
```

Rename **config/example.js** to **config/index.js**
Add your youTubeAPIKey and ffmpegPath to **config/index.js**

# Usage

```
npm start PLAYLIST_ID MAX_RESULTS
```

# Example

```
npm start UU1UMshhDjWrHIDFWkVKZxbw 10
```
