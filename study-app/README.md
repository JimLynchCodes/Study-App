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

Start in dev mode:
```

```

Run tests:
```

```

# Build & Deploy iOS

First, find the available provisioning ids:
```
tns build ios --for-device --release --provision
```

provision ID:
```
```

Then prepare the iOS app with that profile:
```
tns prepare ios --release --for-device --provision a04891b7-.....
```

Then build with the same provision id:
```
tns build ios --for-device --release --provision a04891b7-.....
```


#### 3. Publish
```
tns publish ios --ipa <path-to-app> --appleApplicationSpecificPassword <app-specific-pwd>
```


Note: Provision profiles should be placed here:
```
/Users/jlynch/Library/MobileDevice/Provisioning Profiles
```
