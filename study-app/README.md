# Study App

### Usage
Please use nvm v13
```
nvm use
```

Install nativescript cli:
```
npm install -g nativescript
```

Start in dev mode (real device via preview app):
```
tns preview
```

Start in dev mode (ios simulator):
```
tns run ios tns run ios --env.environment="sat.dev"

tns run ios --env.environment="enrolled-agent.dev"

tns run ios --env.environment="enrolled-agent.dev"
```

Start with different environment (defaults to enrolled agent app)
```

```


Run tests:
```

```

# Build & Deploy iOS

0. You may need to do a platform clean first:
```
tns platform clean ios
```

0b. Edit the ios Info.plist in App_Resources

1. set app id in package.json

First, find the available provisioning ids:
```
tns build ios --for-device --release --provision
```

provision ID:
```

```

Then prepare the iOS app with that profile:
```
tns prepare ios --release --for-device --provision Ea-9-8b-profile
```

- open xcode project
 --> change version number to correct one
 --> stange display name (id should be correctly taken from package.json)

Then build with the same provision id:
```
tns build ios --release --for-device --provision Ea-9-8b-profile
```

### Regnerating Icons and Spalsh Screens

(use a 1024 x 1024px image)

generate icons:
```
tns resources generate icons  ../artwork/app-icon/hax-computer-guy/hax-computer-guy-no-title.png

// (B App)
tns resources generate icons  ../artwork/app-icon/enrolled-agent-lightbulb-brain/enrolled-agent-lightbulb-brain-guy.png
```
generate splashes:
```
tns resources generate splashes ../artwork/app-icon/hax-computer-guy/hax-computer-guy-no-title.png --background "#01040D"

(B App)
tns resources generate splashes ../artwork/app-icon/enrolled-agent-lightbulb-brain/enrolled-agent-lightbulb-brain-guy.png --background "#173890"

```


### 3. Publish
```
tns publish ios --ipa ./platforms/ios/build/Release-iphoneos/studyapp.ipa --appleApplicationSpecificPassword <app-specific-pwd>
```


Note: Provision profiles should be placed here:
```
/Users/jlynch/Library/MobileDevice/Provisioning Profiles
```
