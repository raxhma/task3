
/*let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let playMusicBtn = document.getElementById('playMusicBtn')
let stopMusicBtn = document.getElementById('stopMusicBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gifContainer = document.getElementById('gifContainer')
let tieMessage = document.getElementById('tieMessage')
let backgroundMusic = document.getElementById('backgroundMusic')

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    backgroundMusic.loop = true; // Ensure music loops
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            gifContainer.classList.remove('hidden')
            return
        }

        if (spaces.every(space => space)) {
            playerText.innerHTML = 'It\'s a tie!'
            tieMessage.classList.remove('hidden')
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'
    gifContainer.classList.add('hidden')
    tieMessage.classList.add('hidden')

    currentPlayer = X_TEXT
}

playMusicBtn.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});

stopMusicBtn.addEventListener('click', () => {
    backgroundMusic.pause(); // Pause the music
    backgroundMusic.currentTime = 0; // Optionally reset the music to the start
});

startGame()
// task3.js
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let playMusicBtn = document.getElementById('playMusicBtn')
let stopMusicBtn = document.getElementById('stopMusicBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gifContainer = document.getElementById('gifContainer')
let tieMessage = document.getElementById('tieMessage')
let backgroundMusic = document.getElementById('backgroundMusic')
let clickSound = document.getElementById('clickSound') // Add this line

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    backgroundMusic.loop = true; // Ensure music loops
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        // Play the click sound
        clickSound.play().catch(error => {
            console.log('Error playing click sound:', error);
        });

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            gifContainer.classList.remove('hidden')
            return
        }

        if (spaces.every(space => space)) {
            playerText.innerHTML = 'It\'s a tie!'
            tieMessage.classList.remove('hidden')
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'
    gifContainer.classList.add('hidden')
    tieMessage.classList.add('hidden')

    currentPlayer = X_TEXT
}

playMusicBtn.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});

stopMusicBtn.addEventListener('click', () => {
    backgroundMusic.pause(); // Pause the music
    backgroundMusic.currentTime = 0; // Optionally reset the music to the start
});

startGame()


// task3.js
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let playMusicBtn = document.getElementById('playMusicBtn')
let stopMusicBtn = document.getElementById('stopMusicBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gifContainer = document.getElementById('gifContainer')
let tieMessage = document.getElementById('tieMessage')
let backgroundMusic = document.getElementById('backgroundMusic')
let clickSound = document.getElementById('clickSound')
let winningMusic = document.getElementById('winningMusic') // Add this line

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    backgroundMusic.loop = true; // Ensure music loops
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        // Play the click sound
        clickSound.play().catch(error => {
            console.log('Error playing click sound:', error);
        });

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            gifContainer.classList.remove('hidden')
            
            // Play the winning music
            winningMusic.play().catch(error => {
                console.log('Error playing winning music:', error);
            });

            return
        }

        if (spaces.every(space => space)) {
            playerText.innerHTML = 'It\'s a tie!'
            tieMessage.classList.remove('hidden')
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'
    gifContainer.classList.add('hidden')
    tieMessage.classList.add('hidden')

    currentPlayer = X_TEXT
}

playMusicBtn.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});

stopMusicBtn.addEventListener('click', () => {
    backgroundMusic.pause(); // Pause the music
    backgroundMusic.currentTime = 0; // Optionally reset the music to the start
});

startGame()*/

// task3.js
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let playMusicBtn = document.getElementById('playMusicBtn')
let stopMusicBtn = document.getElementById('stopMusicBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gifContainer = document.getElementById('gifContainer')
let tieMessage = document.getElementById('tieMessage')
let backgroundMusic = document.getElementById('backgroundMusic')
let clickSound = document.getElementById('clickSound')
let winningMusic = document.getElementById('winningMusic') // Add this line

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
    backgroundMusic.loop = true; // Ensure music loops
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        // Play the click sound
        clickSound.play().catch(error => {
            console.log('Error playing click sound:', error);
        });

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            gifContainer.classList.remove('hidden')
            
            // Play the winning music
            winningMusic.play().catch(error => {
                console.log('Error playing winning music:', error);
            });

            // Trigger confetti
            confetti({
                particleCount: 200,
                spread: 160,
                origin: { y: 0.6 }
            });

            return
        }

        if (spaces.every(space => space)) {
            playerText.innerHTML = 'It\'s a tie!'
            tieMessage.classList.remove('hidden')
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'
    gifContainer.classList.add('hidden')
    tieMessage.classList.add('hidden')

    currentPlayer = X_TEXT
}

playMusicBtn.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
        console.log('Error playing audio:', error);
    });
});

stopMusicBtn.addEventListener('click', () => {
    backgroundMusic.pause(); // Pause the music
    backgroundMusic.currentTime = 0; // Optionally reset the music to the start
});

startGame()

