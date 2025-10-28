# Technical Specification

## Tic Tac Toe Combat - Technical Architecture

### Technology Stack

#### Recommended: Unity Engine Approach

**Platform**: Unity 2021.3 LTS or newer

**Core Technologies**:
- **Engine**: Unity 3D
- **Language**: C#
- **Rendering**: Universal Render Pipeline (URP)
- **Input System**: Unity New Input System
- **Physics**: Unity Physics (3D)
- **Networking**: Unity Netcode (for multiplayer)

**Mobile SDKs**:
- iOS: Xcode 14+, iOS 13+
- Android: Android Studio, API Level 23+ (Android 6.0)

### System Architecture

```
┌─────────────────────────────────────┐
│         Game Manager                │
│  (State, Flow, Coordination)        │
└────────┬────────────────────────────┘
         │
    ┌────┴────┬────────────┬──────────┐
    │         │            │          │
┌───▼───┐ ┌──▼───┐  ┌─────▼──┐  ┌────▼────┐
│ Grid  │ │Combat│  │ UI     │  │ Input   │
│System │ │System│  │Manager │  │Handler  │
└───┬───┘ └──┬───┘  └─────┬──┘  └────┬────┘
    │        │            │           │
    │    ┌───▼────────────▼───────────▼───┐
    └────►    Character Controller         │
         │  (Movement, Actions, State)     │
         └─────────────────────────────────┘
```

### Core Systems

#### 1. Grid System

**GridManager.cs**
```
Responsibilities:
- Manage 3x3 tic-tac-toe grid state
- Track which squares are claimed by which player
- Detect win conditions
- Handle square selection
```

Key Data:
```csharp
enum SquareState { Empty, PlayerX, PlayerO }
SquareState[3,3] gridState;
```

#### 2. Combat System

**CombatManager.cs**
```
Responsibilities:
- Handle damage calculations
- Manage combat state (idle, attacking, defending, hit)
- Process attack collisions
- Apply combat effects
```

Components:
- Health System
- Damage Calculator
- Combo System
- Hit Detection

#### 3. Character System

**CharacterController.cs**
```
Responsibilities:
- Process player input
- Control character movement
- Execute attacks and special moves
- Manage character state machine
```

States:
- Idle
- Moving (Walk/Run)
- Jumping
- Crouching
- Attacking (Light/Heavy)
- Blocking
- Hit (Taking damage)
- Knocked down

#### 4. Input System

**MobileInputManager.cs**
```
Responsibilities:
- Handle touch input
- Virtual controls (joystick, buttons)
- Gesture recognition
- Input buffering for combos
```

### Performance Targets

#### Mobile Optimization

**iOS**:
- Target: 60 FPS on iPhone 8 and newer
- Resolution: Dynamic scaling (720p-1080p)
- Draw calls: < 100 per frame
- Polygon count: < 50k per scene

**Android**:
- Target: 60 FPS on mid-range devices (Snapdragon 660+)
- Resolution: Dynamic scaling
- Texture compression: ETC2
- Memory: < 300MB RAM usage

### Asset Pipeline

#### 3D Models
- Format: FBX
- Poly count: 5k-10k per character
- LOD levels: 3 (High/Medium/Low)
- Rigging: Humanoid rig for animation reuse

#### Textures
- Format: PNG (source), compressed at build
- Size: 1024x1024 (characters), 512x512 (UI)
- Compression: ASTC (iOS), ETC2 (Android)

#### Animations
- Format: Unity Animation clips
- FPS: 30
- Compression: Keyframe reduction

#### Audio
- Format: MP3 (music), WAV (SFX)
- Bitrate: 128kbps (music), 44.1kHz (SFX)
- 3D Sound: No (2D audio only)

### File Structure

```
Assets/
├── Scenes/
│   ├── MainMenu.unity
│   ├── CharacterSelect.unity
│   ├── CombatArena.unity
│   └── Results.unity
├── Scripts/
│   ├── Managers/
│   │   ├── GameManager.cs
│   │   ├── GridManager.cs
│   │   ├── CombatManager.cs
│   │   └── UIManager.cs
│   ├── Characters/
│   │   ├── CharacterController.cs
│   │   ├── CharacterStats.cs
│   │   └── CharacterAnimator.cs
│   ├── Combat/
│   │   ├── AttackSystem.cs
│   │   ├── DefenseSystem.cs
│   │   └── ComboSystem.cs
│   └── Input/
│       ├── MobileInputManager.cs
│       ├── VirtualJoystick.cs
│       └── ActionButton.cs
├── Prefabs/
│   ├── Characters/
│   ├── UI/
│   └── Effects/
├── Models/
│   └── Characters/
├── Textures/
├── Materials/
├── Animations/
└── Audio/
    ├── Music/
    └── SFX/
```

### Build Configuration

#### iOS Build
```
Bundle Identifier: com.yourcompany.tictactoecombat
Target: iOS 13.0+
Architecture: ARM64
Compression: Default (LZ4)
Scripting Backend: IL2CPP
```

#### Android Build
```
Package Name: com.yourcompany.tictactoecombat
Min API Level: 23 (Android 6.0)
Target API Level: 33 (Android 13)
Architecture: ARM64, ARMv7
Compression: Default (LZ4)
Scripting Backend: IL2CPP
```

### Testing Requirements

- **Unit Tests**: Core game logic (grid, combat calculations)
- **Device Testing**: 
  - iOS: iPhone 8, iPhone 12, iPhone 14
  - Android: Samsung Galaxy S8, Pixel 5, Pixel 7
- **Performance Profiling**: Frame rate, memory usage, battery drain

### Deployment

#### App Store (iOS)
- Requires Apple Developer Account ($99/year)
- Screenshots: 6.5" and 5.5" displays
- Privacy policy required
- TestFlight for beta testing

#### Google Play (Android)
- Requires Google Play Developer Account ($25 one-time)
- Screenshots: Phone and tablet
- Content rating questionnaire
- Google Play Console for beta testing

### Future Enhancements

- Online multiplayer (Unity Netcode)
- Cloud save (Unity Gaming Services)
- In-app purchases (Unity IAP)
- Analytics (Unity Analytics)
- Ads integration (Unity Ads)
