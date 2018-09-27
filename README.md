Downloads audio from YouTube using [youtube-playlist-info](https://github.com/benkaiser/youtube-playlist-info) and [youtube-mp3-downloader](https://github.com/ytb2mp3/youtube-mp3-downloader) under the hood.

# Setup

## Install ffmpeg

The simplest way is using HomeBrew. Need other methods? See the internet.

## Carry on, sir

```
brew install ffmpeg
git clone https://github.com/shaunsaker/youtube-audio-downloader.git
cd youtube-audio-downloader
yarn
```

Rename **config/example.js** to **config/index.js**
Add your youTubeAPIKey and ffmpegPath to **config/index.js**

# Usage

```
yarn start PLAYLIST_ID MAX_RESULTS
```

# Example

```
yarn start UU1UMshhDjWrHIDFWkVKZxbw 10
```

# TODO

- If MAX_RESULTS === 10 and I have already downloaded 10 results, the app should get the next 10 results that I don't have
- Create empty output directory if not present (fails without this)
- Paths are relative to **DIR** (yarn start index.js will fail)
