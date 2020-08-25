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

tns run ios --env.environment="enrolled-agent.prod"

tns run ios --env.environment="random-trivia.dev"
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
tns build ios --for-device --release --provision Ea-9-8b-profile
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
tns build ios --release --for-device --provision Ea-9-8b-profile --env.environment="enrolled-agent.dev" --env.uglify
```

### Regnerating Icons and Spalsh Screens

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
tns resources generate splashes ../artwork/app-icon/random-trivia/random-trivia-logo.png --background "#37B7C5"

```


### 3. Publish
```
tns publish ios --ipa ./platforms/ios/build/Release-iphoneos/studyapp.ipa --appleApplicationSpecificPassword <app-specific-pwd>
```


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