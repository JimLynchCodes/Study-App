# Tic Tac Toe Combat

A mobile fighting game that combines tic-tac-toe strategy with combat gameplay.

## Overview

This repository contains **Tic Tac Toe Combat** - a mobile game inspired by fighting games like Street Fighter, Tekken, and UFC. Players fight for control of squares on a tic-tac-toe grid using touch-based on-screen controls.

## Features

- ✅ Mobile-first design with on-screen touch controls
- ✅ Combat system with punch, kick, block, and special moves
- ✅ Health and energy management
- ✅ Tic-tac-toe win conditions combined with combat mechanics
- ✅ Works on iPhone and Android devices
- ✅ Responsive design for various screen sizes

## Quick Start - Web Demo

The easiest way to try Tic Tac Toe Combat is through the web demo:

```bash
cd tic-tac-toe-combat/src
# Open index.html in a mobile browser or use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000 on your phone
```

## Project Structure

```
tic-tac-toe-combat/
├── README.md              # Main game documentation
├── docs/                  # Game design and technical specs
│   ├── game-design.md     # Game mechanics and concepts
│   ├── controls.md        # Mobile control specifications
│   └── technical-spec.md  # Technical architecture
└── src/                   # Web-based demo
    ├── index.html         # Game UI
    ├── styles.css         # Mobile-optimized styling
    └── game.js            # Game logic and controls
```

## Documentation

- [Game Design Document](tic-tac-toe-combat/docs/game-design.md)
- [Mobile Controls Specification](tic-tac-toe-combat/docs/controls.md)
- [Technical Specification](tic-tac-toe-combat/docs/technical-spec.md)

## How to Play

1. **Start the game** - Tap "START GAME"
2. **Select a square** - Tap any empty square on the grid to fight for it
3. **Combat** - Use the on-screen controls:
   - Left side: Virtual joystick for movement
   - Right side: Action buttons (Punch, Kick, Block, Special)
4. **Win conditions**:
   - Get three squares in a row (like tic-tac-toe)
   - OR reduce opponent's health to zero

## Controls

### Movement (Left Side)
- **Virtual Joystick**: Control character movement

### Actions (Right Side)
- **👊 Punch**: Quick attack (costs 5 energy)
- **🦵 Kick**: Heavy attack (costs 10 energy)
- **🛡️ Block**: Defensive stance
- **⚡ Special**: Powerful attack (costs 50 energy)

## Technology Stack

### Current Demo
- HTML5 + CSS3 + JavaScript
- Touch-optimized for mobile browsers
- No dependencies required

### Production Recommendations
For a full 3D version, see [Technical Specification](tic-tac-toe-combat/docs/technical-spec.md):
- Unity 3D (recommended)
- Unreal Engine
- Three.js + React Native

## Development Roadmap

- [x] Basic game concept and design
- [x] Web-based demo with mobile controls
- [x] Touch input system
- [x] Combat mechanics
- [x] Win condition checking
- [ ] 3D graphics implementation
- [ ] Character animations
- [ ] Sound effects and music
- [ ] Online multiplayer
- [ ] Character selection
- [ ] Special move variety

## License

See LICENSE file for details.

---

## Legacy: Study-App

This repository previously contained a NativeScript study application. The original code is preserved in the following directories:
- `study-app/` - Original NativeScript application
- `EnrolledAgentStudyApp/` - Enrolled agent study resources
- `backend-study-app-server/` - Backend server code