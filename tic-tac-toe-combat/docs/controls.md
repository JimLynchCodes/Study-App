# Mobile Controls Specification

## Touch Controls Layout

### Screen Division

The mobile screen is divided into two main control zones:

```
┌─────────────────────────────────┐
│                                 │
│      GAME VIEWPORT              │
│      (Combat Area)              │
│                                 │
│                                 │
├──────────────┬──────────────────┤
│   LEFT       │   RIGHT          │
│   ZONE       │   ZONE           │
│  (Movement)  │  (Actions)       │
│              │                  │
└──────────────┴──────────────────┘
```

### Left Zone - Movement Controls

**Virtual D-Pad (Joystick)**

Position: Bottom-left corner, approximately 20% from edges
Size: 120x120 pixels (adjusts for screen DPI)

Directions:
- **Up**: Jump
- **Down**: Crouch/Duck
- **Left**: Move character left
- **Right**: Move character right
- **Diagonal**: Combined movements (e.g., jump forward)

Visual Feedback:
- Base circle: Semi-transparent gray
- Direction indicator: Highlights direction being pressed
- Touch area: Slightly larger than visual for easier use

### Right Zone - Action Controls

**Button Layout**

Four main action buttons arranged in a diamond/cross pattern:

```
        [JUMP]
          ●
   [BLOCK] ●   ● [PUNCH]
          ●
       [KICK]
```

#### Button Details:

1. **Punch Button** (Right position)
   - Color: Red
   - Size: 80x80 pixels
   - Action: Light/quick attack
   - Cooldown: 0.5 seconds

2. **Kick Button** (Bottom position)
   - Color: Orange
   - Size: 80x80 pixels
   - Action: Heavy/power attack
   - Cooldown: 1 second

3. **Block Button** (Left position)
   - Color: Blue
   - Size: 80x80 pixels
   - Action: Defensive stance
   - Hold to maintain block

4. **Special Button** (Top position)
   - Color: Purple/Gold
   - Size: 80x80 pixels
   - Action: Character special move
   - Requires energy bar to be filled

### Additional UI Elements

#### Top HUD (Always Visible)

```
Player HP [████████  ] 80%        [  ████████] 80% Enemy HP
Player SP [██████    ] 60%        [    ██████] 60% Enemy SP
                TIME: 1:45
```

#### Bottom Info Bar

- Current square being contested
- Combo counter
- Mini-map of tic-tac-toe grid

### Touch Gestures

#### Swipe Gestures (Advanced Moves)

- **Swipe Right**: Dash forward
- **Swipe Left**: Dash backward
- **Swipe Up**: Super jump
- **Swipe Down**: Slide attack

#### Combo Inputs

Combinations of button presses:
- **Punch + Punch**: Double jab
- **Kick + Jump**: Flying kick
- **Block + Punch**: Counter attack
- **Punch + Kick + Special**: Ultimate move

### Haptic Feedback

- Light vibration on button press
- Medium vibration on successful hit
- Strong vibration on special move or heavy impact

### Accessibility Options

1. **Button Size**: Adjustable (Small/Medium/Large)
2. **Button Position**: Left-handed mode (mirror layout)
3. **Opacity**: Adjustable transparency (40%-100%)
4. **Haptics**: On/Off toggle
5. **Double-tap Protection**: Prevent accidental inputs

### Response Requirements

- **Touch Latency**: < 50ms from touch to action
- **Button Hit Area**: Slightly larger than visual (easier to press)
- **Visual Feedback**: Immediate color change on press
- **Sound Feedback**: Optional button press sounds

### Platform-Specific Considerations

#### iOS
- Safe area insets for notched devices
- Home indicator avoidance zone
- Gesture compatibility with iOS system gestures

#### Android
- Navigation bar awareness
- Back button handling
- Screen rotation support

### Control Customization

Players can customize:
- Button layout positions (grid-based snapping)
- Button size (3 preset sizes)
- D-pad vs joystick style
- Button order for actions
- Sensitivity settings
