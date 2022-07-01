# react-native-base-ts
My react native typescript flavour, based on official RN docs [Environment Setup](https://reactnative.dev/docs/environment-setup) using `expo-cli`

Added:
- Absoulute import path `src/*`
- Eslint
- vscode config, enabling auto-format (eslint conform)

## System Requirements
- Ubuntu 16^
- Node 16^
- NPM 8^

## Quick Start
```sh
npm ci
npm run start
```

## IDE Setup (ignore if you don't use vscode)
Must have extensions
- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


## Resources
- Expo custom entrypoint, use `src/App.tsx` [link](https://stackoverflow.com/a/67930988)
- Enable absolute import alias config in babel config [link](https://stackoverflow.com/a/44410874)
- Developing in WSL [link](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade)

## Troubleshooting
- > Running app on device / emulator displaying `Something went wrong`

  Possible cause: device / emulator isn't in the same local network as the server's (default to LAN). Try open developer tools (press `d` on its daemon terminal), switch to `Tunnel` connection, then hit `Run on Android device/emulator`

- > Babel config changes not applied
  
  Possible cause: linger cached bundle from previous build (still appliying old babel config). Try `npm run start-clean` or `expo start -c --{android|ios|web}` it will cleanup cached bundle and re-bundling again hence force to apply new babel config

- > Connected ADB device via WSL doesn't appear in `adb devices`

  Possible cause: outdated wsl version, `udev ` need to be reloaded, device not in debug mode. [Solution](https://github.com/dorssel/usbipd-win/issues/60#issuecomment-962121982)