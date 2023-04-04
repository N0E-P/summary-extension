# Summary extension

## Build from source

1. Clone the repo
2. Install dependencies with `npm i`
3. `npm run build`

### Chrome

1. Go to `chrome://extensions/`.
2. At the top right, turn on `Developer mode`.
3. Click `Load unpacked`.
4. Find and select extension folder(`build/chromium/`).

### Firefox

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click `Load Temporary Add-on`.
3. Find and select the extension file(`build/firefox.zip`).

## Troubleshooting in Brave

![Screenshot](screenshots/brave.png?raw=true)

Disable "Prevent sites from fingerprinting me based on my language preferences" in `brave://settings/shields`

## Credit

This project is a fork from the version 1.7.1 of [sparticleinc/chatgpt-google-summary-extension](https://github.com/sparticleinc/chatgpt-google-summary-extension/tree/e3cfcbfc88cc230f8f391228e5cec2a068243203)
