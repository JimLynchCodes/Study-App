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

Note - since adding admob and auth0 plugins, `tns preview` sadly won't work anymore (expected limitation of tns preview). 😢

Start in dev mode (default ios simulator):
```
tns run ios --env.environment="sat.dev"

tns run ios --env.environment="enrolled-agent.dev"

tns run ios --env.environment="enrolled-agent.prod"

tns run ios --env.environment="random-trivia.dev"
```

_To use a specific iOS device simulator_

```
tns device ios --available-devices
```

(or)

To find available devices:
- Open XCode
- Go to Window -> Devices and Simulators
- Click Simulators
- Copy the identifier of the device you'd like to use.
- Then do "tns run" specifying this device

```
tns run ios --device="0F60E57C-F0E0-4E4B-B581-2A8C980F589D"
```


Run tests:
```

```

# Build & Deploy iOS

0. You may need to do a platform clean first:
```
tns platform clean ios
```

1. Set ap bundle Id

[check] enrolled-agent.study-app

[check] random-trivia.study-app

- change package.json "id" under "nativescript".

- change bundleId in iOS plist (only used by auth0)

2. Update App Name (visible on user's home screen)
change the ios Info.plist in App_Resources
(Increment the verison, ensure "CFBundleName" and "CFBundleDisplayName" are what you want to be shown for your app on the iphone home screen)

3. Use correct Firebase Files

- under App_Resources/iOS, delete the file beginning with "GoogleService-Info". 

Copy the relevant one for this app from `mob-files/iOS` to `App_Resources/iOS` and rename it to `GoogleService-Info.plist`.

4. Regenerate Icons and Splash Screens

(use a 1024 x 1024px image)

### Generate icons:
```
// EA App
tns resources generate icons  ../artwork/app-icon/hax-computer-guy/hax-computer-guy-no-title.png

// EA App (B)
tns resources generate icons  ../artwork/app-icon/enrolled-agent-lightbulb-brain/enrolled-agent-lightbulb-brain-guy.png

// Random Trivia App
tns resources generate icons  ../artwork/app-icon/random-trivia/random-trivia-logo.png

```
### Generate splashes:
```
// EA App
tns resources generate splashes  ../artwork/app-icon/hax-computer-guy/hax-computer-guy-no-title.png --background="#01040D"

(B App)
tns resources generate splashes ../artwork/app-icon/enrolled-agent-lightbulb-brain/enrolled-agent-lightbulb-brain-guy.png --background "#173890"

// Random Trivia App
tns resources generate splashes ../artwork/app-icon/random-trivia/random-trivia-logo.png --background "#12AAC8"
```

## 5. Build
First, find the available provisioning ids:
```
tns build ios --for-device --release --provision
```

Optional: you can "prepare" the iOS app if build doesn't work:
```
tns prepare ios --release --for-device --provision Ea-9-8b-profile

 - open xcode project
 --> change version number to correct one
 --> stange display name (id should be correctly taken from package.json)
```


Then build with the same provision id:

** Good Ones **

Enrolled Agent
```
tns build ios --release --for-device --provision Ea-9-8b-profile --env.environment="enrolled-agent.prod" --env.uglify
```

Random Trivia
```
tns build ios --release --for-device --provision Ea-9-8b-profile --env.environment="random-trivia.prod" --env.uglify
```


## 6. Publish
```
tns publish ios ______@gmail.com --ipa ./platforms/ios/build/Release-iphoneos/studyapp.ipa --appleApplicationSpecificPassword <app-specific-pwd>
```
Rndm-Trivia.ipa

Note: Provision profiles should be placed here:
```
/Users/jlynch/Library/MobileDevice/Provisioning Profiles
```

### Creating a New App (Same Codebase, New Theme)

1. choose a theme name. 

In this example case we'll choose "foo-bar".

2. Create environment files
Add another file here, using the others as a template: 
```
foo-bar src/environments/foo-bar/environment.dev.ts
foo-bar src/environments/foo-bar/environment.prod.ts
```

3. Create Data files
Create files for chapters, questions, and static text data for this theme.
```
src/app/data/random-trivia/chapters.ts
src/app/data/random-trivia/question-bank.ts
src/app/data/random-trivia/static-text.ts
```

### Testing With Different Simulators

Iphone 8
```
tns run ios --env.environment="random-trivia.dev" --device="E36E2FEF-8EDB-45E7-9A51-E60C6EA3EE74"
```

Iphone 8 Plus
```
tns run ios --env.environment="random-trivia.dev" --device="E5AF7272-70CF-4075-AF10-3FD308555CAC"
```

Iphone 11 2nd Gen
```
tns run ios --env.environment="random-trivia.dev" --device="C3062EA8-1662-4F77-B028-E14DAB0575B7"
```


### Auth0

Errthing under jim's gmail.

