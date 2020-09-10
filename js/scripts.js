// Global Variables
let playerSun = false;
let playerCloud = false;
let playerCloudImage = "./assets/rain.png";
let playerSunImage = "./assets/sun.png";
let endOfGame = false;

// Tic-Tac-Toe grid individual box selectors
let topLeft = document.getElementById("top-left");
let topMid = document.getElementById("top-mid");
let topRight = document.getElementById("top-right");
let midLeft = document.getElementById("mid-left");
let midMid = document.getElementById("mid-mid");
let midRight = document.getElementById("mid-right");
let botLeft = document.getElementById("bot-left");
let botMid = document.getElementById("bot-mid");
let botRight = document.getElementById("bot-right");

//Tic-Tac-Toe grid individual image ID selectors
let topLeftImage = document.getElementById("topLeftImage");
let topMidImage = document.getElementById("topMidImage");
let topRightImage = document.getElementById("topRightImage");
let midLeftImage = document.getElementById("midLeftImage");
let midMidImage = document.getElementById("midMidImage");
let midRightImage = document.getElementById("midRightImage");
let botLeftImage = document.getElementById("botLeftImage");
let botMidImage = document.getElementById("botMidImage");
let botRightImage = document.getElementById("botRightImage");

// Reset Grid Box values
// let resetGameBoard = () => {
//     document.getElementById(`topLeftImage`).src = "";
//     document.getElementById(`topMidImage`).src = "";
//     document.getElementById(`topRightImage`).src = "";
//     document.getElementById(`midLeftImage`).src = "";
//     document.getElementById(`midMidImage`).src = "";
//     document.getElementById(`midRightImage`).src = "";
//     document.getElementById(`botLeftImage`).src = "";
//     document.getElementById(`botMidImage`).src = "";
//     document.getElementById(`botRightImage`).src = "";
// }

// Sun and Cloud player button selectors
let sunButton = document.getElementById("sun");
let cloudButton = document.getElementById("rain");
let resetButton = document.getElementById("reset");

// Variables that are used in functions to only let me click each individual grid box one time
let topLeftClicked = true;
let topMidClicked = true;
let topRightClicked = true;
let midLeftClicked = true;
let midMidClicked = true;
let midRightClicked = true;
let botLeftClicked = true;
let botMidClicked = true;
let botRightClicked = true;


// This is a snippet I borrowed from and modified to check if two arrays are equal.
let arrayChecker = (x, y) => { // If the arrays are strictly equal to each other then return true. if thats not true it checks if both are equal to null
    if (x === y) return true; // You can't compare null to another array
    if (x == null || y == null) return false;
    if (x.length !== y.length) return false; // If they have different lengths then they can't be equal

    for (var i = 0; i < x.length; ++i) { // Are each individual elements in both arrays equal to each other.
        if (x[i] !== y[i]) return false;
    }
    return true;
}
// Array of Objects with a single array inside. Each object has a single property of an array.
let gameBoard = [{
        topRow: [0, 0, 0]
    },
    {
        midRow: [0, 0, 0]
    },
    {
        botRow: [0, 0, 0]
    }
]

const winArray_Sun = [1, 1, 1] // Winning condition for Sun Player
const winArray_Cloud = [2, 2, 2] // Winning condition for Cloud player

// This function runs all of the win condition checks and is used after every single div box is clicked to check for a winner.
let endOfGameCheck = () => {
    leftDiagonalCheck(gameBoard)
    rightDiagonalCheck(gameBoard)
    topRowCheck(gameBoard)
    midRowCheck(gameBoard)
    botRowCheck(gameBoard)
    ColumnCheck(gameBoard)
}

// Win Alert Delay functions
let sunWinAlert = () => {
    setTimeout(function () {
        alert("Sun player wins!");
    }, 500);
}

let cloudWinAlert = () => {
    setTimeout(function () {
        alert("Cloud player wins!");
    }, 500);
}

let newGameDelay = () => {
    setTimeout(function () {
        newGame();
    }, 1000)
}

//Diagonal Checks
// ========================================
// Left to right diagonal check
let leftDiagonalCheck = (array) => {
    if (arrayChecker([array[0].topRow[0], array[1].midRow[1], array[2].botRow[2]], winArray_Sun)) {
        sunWinAlert();
        newGameDelay();
    } else if (arrayChecker([array[0].topRow[0], array[1].midRow[1], array[2].botRow[2]], winArray_Cloud)) {
        cloudWinAlert();
        newGameDelay();
    }
}

// Right to left diagonal check
let rightDiagonalCheck = (array) => {
    if (arrayChecker([array[2].botRow[0], array[1].midRow[1], array[0].topRow[2]], winArray_Sun)) {
        sunWinAlert();
        newGameDelay();
    } else if (arrayChecker([array[2].botRow[0], array[1].midRow[1], array[0].topRow[2]], winArray_Cloud)) {
        cloudWinAlert();
        newGameDelay();

    }
}

// Top row game win check
let topRowCheck = (array) => {
    for (let i = 0; i < 3; i++) {
        if (arrayChecker(array[i].topRow, winArray_Sun)) {
            sunWinAlert();
            newGameDelay();
        } else if (arrayChecker(array[i].topRow, winArray_Cloud)) {
            cloudWinAlert();
            newGameDelay();
        }
    }

}


// Mid row game win check
let midRowCheck = (array) => {
    for (let i = 0; i < 3; i++) {
        if (arrayChecker(array[i].midRow, winArray_Sun)) {
            sunWinAlert();
            newGameDelay();
        } else if (arrayChecker(array[i].midRow, winArray_Cloud)) {
            cloudWinAlert();
            newGameDelay();
        }
    }

}

// Bot row game win check
let botRowCheck = (array) => {
    for (let i = 0; i < 3; i++) {
        if (arrayChecker(array[i].botRow, winArray_Sun)) {
            sunWinAlert();
            newGameDelay();
        } else if (arrayChecker(array[i].botRow, winArray_Cloud)) {
            cloudWinAlert();
            newGameDelay();
        }
    }

}
// Column row game win check
let ColumnCheck = (array) => {
    for (let i = 0; i < 3; i++) {
        if (arrayChecker([array[0].topRow[i], array[1].midRow[i], array[2].botRow[i]], winArray_Sun)) {
            sunWinAlert();
            newGameDelay();
        } else if (arrayChecker([array[0].topRow[i], array[1].midRow[i], array[2].botRow[i]], winArray_Cloud)) {
            cloudWinAlert();
            newGameDelay();
        }
    }

}

// An event listener that identifies the order in which the players takes turns. 
sunButton.addEventListener("click", function (event) {
    console.log(gameBoard)
    playerTurn = 1;
    if (playerTurn > 0) {
        playerSun = true;
        playerTurn--;
    } else {
        return playerSun = false;
    }

})
// An event listener that identifies the order in which the players takes turns. 
cloudButton.addEventListener("click", function (event) {

    playerTurn = 1;
    if (playerTurn > 0) {
        playerCloud = true;
        playerTurn--;
    } else {
        return playerCloud = false;
    }

})

// An event listener that listens for the user to click the reset button to wipe the game board
document.getElementById("reset").addEventListener("click", function () {
    newGame()
});


// On-click functions for every single game board box that identifies the current players box by image
// Also logs a number relative to that particular player to help determine win conditions.
// Sun player = 1 and Cloud player = 2
topLeft.onclick = () => {
    if (playerSun === true && topLeftClicked === true) {
        topLeftImage.src = playerSunImage; // Changes the image to sun
        playerSun = false; // Changes the playerSun value to false 
        playerCloud = true;
        gameBoard[0].topRow[0] = 1; // Sun Value

    } else if (playerCloud === true && topLeftClicked === true) {
        topLeftImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[0].topRow[0] = 2; // Cloud Value
    }
    topLeftClicked = false;
    return endOfGameCheck();
}

topMid.onclick = () => {
    if (playerSun === true && topMidClicked === true) {
        topMidImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[0].topRow[1] = 1; // Sun Value
    } else if (playerCloud === true && topMidClicked === true) {
        topMidImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[0].topRow[1] = 2; // Moon Value
    }
    topMidClicked = false;
    return endOfGameCheck();
}
topRight.onclick = () => {
    if (playerSun === true && topRightClicked === true) {
        topRightImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[0].topRow[2] = 1; // Sun Value
    } else if (playerCloud === true && topRightClicked === true) {
        topRightImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[0].topRow[2] = 2; // Moon Value
    }
    topRightClicked = false;
    return endOfGameCheck();
}
midLeft.onclick = () => {
    if (playerSun === true && midLeftClicked === true) {
        midLeftImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[0] = 1; // Sun Value
    } else if (playerCloud === true && midLeftClicked === true) {
        midLeftImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[1].midRow[0] = 2; // Moon Value
    }
    midLeftClicked = false;
    return endOfGameCheck();
}
midMid.onclick = () => {
    if (playerSun === true && midMidClicked === true) {
        midMidImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[1] = 1; // Sun Value
    } else if (playerCloud === true && midMidClicked === true) {
        midMidImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[1].midRow[1] = 2; // Moon Value
    }
    midMidClicked = false;
    return endOfGameCheck();
}
midRight.onclick = () => {

    if (playerSun === true && midRightClicked === true) {
        midRightImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[2] = 1; // Sun Value
    } else if (playerCloud === true && midRightClicked === true) {
        midRightImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[1].midRow[2] = 2; // Moon Value
    }
    midRightClicked = false;
    return endOfGameCheck();
}
botLeft.onclick = () => {

    if (playerSun === true && botLeftClicked === true) {
        botLeftImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[0] = 1; // Sun Value
    } else if (playerCloud === true && botLeftClicked === true) {
        botLeftImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[2].botRow[0] = 2; // Moon Value
    }
    botLeftClicked = false;
    return endOfGameCheck();
}
botMid.onclick = () => {

    if (playerSun === true && botMidClicked === true) {
        botMidImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[1] = 1; // Sun Value
    } else if (playerCloud === true && botMidClicked === true) {
        botMidImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[2].botRow[1] = 2; // Moon Value
    }
    botMidClicked = false;
    return endOfGameCheck();
}
botRight.onclick = () => {

    if (playerSun === true && botRightClicked === true) {
        botRightImage.src = playerSunImage; // Changes the image to sun
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[2] = 1; // Sun Value
    } else if (playerCloud === true && botRightClicked === true) {
        botRightImage.src = playerCloudImage; // Changes the image to cloud
        playerSun = true;
        gameBoard[2].botRow[2] = 2; // Moon Value
    }
    botRightClicked = false;
    return endOfGameCheck();
}


// New game function that resets all values for a brand new game.

let newGame = () => {
    gameBoard = [{
            topRow: [0, 0, 0]
        },
        {
            midRow: [0, 0, 0]
        },
        {
            botRow: [0, 0, 0]
        }
    ]
    topLeftImage.src = "";
    topMidImage.src = "";
    topRightImage.src = "";
    midLeftImage.src = "";
    midMidImage.src = "";
    midRightImage.src = "";
    botLeftImage.src = "";
    botMidImage.src = "";
    botRightImage.src = "";
    topLeftClicked = true;
    topMidClicked = true;
    topRightClicked = true;
    midLeftClicked = true;
    midMidClicked = true;
    midRightClicked = true;
    botLeftClicked = true;
    botMidClicked = true;
    botRightClicked = true;
}