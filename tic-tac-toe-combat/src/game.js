// Game State
const gameState = {
    grid: Array(9).fill(null),
    currentPlayer: 'X',
    playerHealth: 100,
    enemyHealth: 100,
    playerEnergy: 100,
    enemyEnergy: 100,
    inCombat: false,
    currentSquare: null,
    gameOver: false,
    timer: 180, // 3 minutes
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('start-screen'),
    startBtn: document.getElementById('start-btn'),
    gameGrid: document.getElementById('game-grid'),
    combatArena: document.getElementById('combat-arena'),
    playerHealthBar: document.getElementById('player-health'),
    enemyHealthBar: document.getElementById('enemy-health'),
    playerEnergyBar: document.getElementById('player-energy'),
    enemyEnergyBar: document.getElementById('enemy-energy'),
    timerDisplay: document.getElementById('timer'),
    combatMessage: document.getElementById('combat-message'),
    gameMessage: document.getElementById('game-message'),
    messageTitle: document.getElementById('message-title'),
    messageText: document.getElementById('message-text'),
    messageBtn: document.getElementById('message-btn'),
    punchBtn: document.getElementById('punch-btn'),
    kickBtn: document.getElementById('kick-btn'),
    blockBtn: document.getElementById('block-btn'),
    specialBtn: document.getElementById('special-btn'),
    joystickStick: document.getElementById('joystick-stick'),
    joystickBase: document.getElementById('joystick-base'),
    playerFighter: document.getElementById('player-fighter'),
    enemyFighter: document.getElementById('enemy-fighter'),
};

// Initialize Game
function initGame() {
    elements.startBtn.addEventListener('click', startGame);
    elements.messageBtn.addEventListener('click', hideMessage);
    
    // Grid cell clicks
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.addEventListener('click', () => selectSquare(parseInt(cell.dataset.index)));
    });
    
    // Combat controls
    elements.punchBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        attack('punch');
    });
    
    elements.kickBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        attack('kick');
    });
    
    elements.blockBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        block();
    });
    
    elements.specialBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        specialMove();
    });
    
    // Joystick (basic implementation)
    setupJoystick();
}

function startGame() {
    elements.startScreen.classList.add('hidden');
    resetGame();
    startTimer();
}

function resetGame() {
    gameState.grid = Array(9).fill(null);
    gameState.currentPlayer = 'X';
    gameState.playerHealth = 100;
    gameState.enemyHealth = 100;
    gameState.playerEnergy = 100;
    gameState.enemyEnergy = 100;
    gameState.gameOver = false;
    gameState.timer = 180;
    
    updateHealthBars();
    updateEnergyBars();
    renderGrid();
}

function selectSquare(index) {
    if (gameState.gameOver || gameState.inCombat) return;
    if (gameState.grid[index] !== null) return;
    
    gameState.currentSquare = index;
    startCombat();
}

function startCombat() {
    gameState.inCombat = true;
    elements.combatArena.classList.remove('hidden');
    elements.gameGrid.style.opacity = '0.3';
    
    showCombatMessage('Fight for the square!');
    
    // Auto opponent attacks
    setTimeout(() => enemyAction(), 1000 + Math.random() * 2000);
}

function endCombat(winner) {
    gameState.inCombat = false;
    elements.combatArena.classList.add('hidden');
    elements.gameGrid.style.opacity = '1';
    
    if (winner === 'player') {
        gameState.grid[gameState.currentSquare] = gameState.currentPlayer;
        showMessage('Victory!', 'You claimed the square!', () => {
            renderGrid();
            checkWinCondition();
            switchPlayer();
        });
    } else {
        showMessage('Defeat!', 'Opponent claimed the square!', () => {
            const opponent = gameState.currentPlayer === 'X' ? 'O' : 'X';
            gameState.grid[gameState.currentSquare] = opponent;
            renderGrid();
            checkWinCondition();
            switchPlayer();
        });
    }
}

function attack(type) {
    if (!gameState.inCombat) return;
    
    const damage = type === 'punch' ? 10 : 15;
    const energyCost = type === 'punch' ? 5 : 10;
    
    if (gameState.playerEnergy < energyCost) {
        showCombatMessage('Not enough energy!');
        return;
    }
    
    gameState.playerEnergy -= energyCost;
    
    // Animation
    elements.playerFighter.classList.add('attacking');
    setTimeout(() => {
        elements.playerFighter.classList.remove('attacking');
    }, 300);
    
    // Chance to hit
    if (Math.random() > 0.3) {
        gameState.enemyHealth -= damage;
        elements.enemyFighter.classList.add('hit');
        showCombatMessage(`Hit! -${damage} damage`);
        
        setTimeout(() => {
            elements.enemyFighter.classList.remove('hit');
        }, 300);
        
        if (gameState.enemyHealth <= 0) {
            gameState.enemyHealth = 0;
            updateHealthBars();
            endCombat('player');
            return;
        }
    } else {
        showCombatMessage('Miss!');
    }
    
    updateHealthBars();
    updateEnergyBars();
}

function block() {
    if (!gameState.inCombat) return;
    showCombatMessage('Blocking...');
    // Block reduces next damage by 50%
}

function specialMove() {
    if (!gameState.inCombat) return;
    
    if (gameState.playerEnergy < 50) {
        showCombatMessage('Not enough energy for special!');
        return;
    }
    
    gameState.playerEnergy -= 50;
    gameState.enemyHealth -= 30;
    
    elements.playerFighter.classList.add('attacking');
    elements.enemyFighter.classList.add('hit');
    
    showCombatMessage('SPECIAL ATTACK! -30 damage');
    
    setTimeout(() => {
        elements.playerFighter.classList.remove('attacking');
        elements.enemyFighter.classList.remove('hit');
    }, 500);
    
    if (gameState.enemyHealth <= 0) {
        gameState.enemyHealth = 0;
        updateHealthBars();
        endCombat('player');
        return;
    }
    
    updateHealthBars();
    updateEnergyBars();
}

function enemyAction() {
    if (!gameState.inCombat) return;
    
    const action = Math.random();
    
    if (action < 0.6) {
        // Enemy attacks
        const damage = Math.random() < 0.5 ? 8 : 12;
        gameState.playerHealth -= damage;
        
        elements.enemyFighter.classList.add('attacking');
        elements.playerFighter.classList.add('hit');
        
        showCombatMessage(`Enemy attacks! -${damage} damage`);
        
        setTimeout(() => {
            elements.enemyFighter.classList.remove('attacking');
            elements.playerFighter.classList.remove('hit');
        }, 300);
        
        if (gameState.playerHealth <= 0) {
            gameState.playerHealth = 0;
            updateHealthBars();
            endCombat('enemy');
            return;
        }
    }
    
    updateHealthBars();
    
    // Continue enemy actions
    if (gameState.inCombat) {
        setTimeout(() => enemyAction(), 1500 + Math.random() * 2000);
    }
}

function switchPlayer() {
    gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
}

function renderGrid() {
    document.querySelectorAll('.grid-cell').forEach((cell, index) => {
        cell.textContent = gameState.grid[index] || '';
        cell.className = 'grid-cell';
        
        if (gameState.grid[index] === 'X') {
            cell.classList.add('claimed-x');
        } else if (gameState.grid[index] === 'O') {
            cell.classList.add('claimed-o');
        }
        
        if (gameState.grid[index] !== null) {
            cell.classList.add('disabled');
        }
    });
}

function checkWinCondition() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameState.grid[a] && 
            gameState.grid[a] === gameState.grid[b] && 
            gameState.grid[a] === gameState.grid[c]) {
            gameOver(`Player ${gameState.grid[a]} wins!`);
            return;
        }
    }
    
    // Check for draw
    if (gameState.grid.every(cell => cell !== null)) {
        gameOver('Draw! No winner.');
    }
    
    // Check health
    if (gameState.playerHealth <= 0) {
        gameOver('Player O wins by knockout!');
    } else if (gameState.enemyHealth <= 0) {
        gameOver('Player X wins by knockout!');
    }
}

function gameOver(message) {
    gameState.gameOver = true;
    showMessage('Game Over!', message, () => {
        elements.startScreen.classList.remove('hidden');
    });
}

function updateHealthBars() {
    elements.playerHealthBar.style.width = `${gameState.playerHealth}%`;
    elements.enemyHealthBar.style.width = `${gameState.enemyHealth}%`;
}

function updateEnergyBars() {
    elements.playerEnergyBar.style.width = `${gameState.playerEnergy}%`;
    elements.enemyEnergyBar.style.width = `${gameState.enemyEnergy}%`;
    
    // Regenerate energy slowly
    if (gameState.playerEnergy < 100) {
        gameState.playerEnergy = Math.min(100, gameState.playerEnergy + 0.5);
    }
}

function startTimer() {
    setInterval(() => {
        if (!gameState.gameOver && gameState.timer > 0) {
            gameState.timer--;
            const minutes = Math.floor(gameState.timer / 60);
            const seconds = gameState.timer % 60;
            elements.timerDisplay.textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (gameState.timer === 0) {
                gameOver('Time up! Draw.');
            }
        }
        
        // Update energy regeneration
        if (!gameState.inCombat) {
            updateEnergyBars();
        }
    }, 1000);
}

function showCombatMessage(message) {
    elements.combatMessage.textContent = message;
    setTimeout(() => {
        if (elements.combatMessage.textContent === message) {
            elements.combatMessage.textContent = '';
        }
    }, 2000);
}

function showMessage(title, text, callback) {
    elements.messageTitle.textContent = title;
    elements.messageText.textContent = text;
    elements.gameMessage.classList.remove('hidden');
    
    elements.messageBtn.onclick = () => {
        hideMessage();
        if (callback) callback();
    };
}

function hideMessage() {
    elements.gameMessage.classList.add('hidden');
}

function setupJoystick() {
    let joystickActive = false;
    let startPos = { x: 0, y: 0 };
    
    elements.joystickBase.addEventListener('touchstart', (e) => {
        e.preventDefault();
        joystickActive = true;
        const rect = elements.joystickBase.getBoundingClientRect();
        startPos.x = rect.left + rect.width / 2;
        startPos.y = rect.top + rect.height / 2;
    });
    
    elements.joystickBase.addEventListener('touchmove', (e) => {
        if (!joystickActive) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - startPos.x;
        const deltaY = touch.clientY - startPos.y;
        
        // Limit movement
        const distance = Math.min(40, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
        const angle = Math.atan2(deltaY, deltaX);
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        elements.joystickStick.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    
    elements.joystickBase.addEventListener('touchend', (e) => {
        e.preventDefault();
        joystickActive = false;
        elements.joystickStick.style.transform = 'translate(-50%, -50%)';
    });
}

// Start the game
initGame();
