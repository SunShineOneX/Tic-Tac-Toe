// Global Variables
let playerSun = false;
let playerCloud = false;
let playerCloudImage = "./assets/rain.png";
let playerSunImage = "./assets/sun.png";

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

// Sun and Cloud player button selectors
let sunButton = document.getElementById("sun");
let cloudButton = document.getElementById("rain");

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

// let topLeftCellVal = 0;
// let topMidCellVal = 0;
// let topRightCellVal = 0;
// let midLeftCellVal = 0;
// let midMidCellVal = 0;
// let midRightCellVal = 0;
// let botLeftCellVal = 0;
// let botMidCellVal = 0;
// let botRightCellVal = 0;


// SOURCE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
// This is a snippet I borrowed from and modified to help check game win conditions.
let arrayChecker = (x, y) => {
    if (x === y) return true;
    if (x == null || y == null) return false;
    if (x.length !== y.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (x[i] !== y[i]) return false;
    }
    return true;
}

const gameBoard = [{
        topRow: [0, 0, 0]
    },
    {
        midRow: [0, 0, 0]
    },
    {
        botRow: [0, 0, 0]
    }
]

const winArray_Sun = [1, 1, 1]
const winArray_Cloud = [2, 2, 2]

//Diagonal Checks
// ===============
let diagonalCheck = () => {

}

let topRowCheck = (array) => {
    for (let i = 0; i < array[0].length; i++) {
        if (arrayChecker(array[i].topRow, winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].topRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let midRowCheck = (array) => {
    for (let i = 0; i < array[1].length; i++) {
        if (arrayChecker(array[i].midRow, winArray_Sun)) { // if (arrayChecker(array[1].midRow[i], winArray_Sun)) Is this how it should be?
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].midRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let botRowCheck = (array) => {
    for (let i = 0; i < array[2].length; i++) {
        if (arrayChecker(array[i].botRow, winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].botRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let ColumnCheck = (array) => {
    for (let i = 0; i < array[0].length; i++) {
        if (arrayChecker(array[0].topRow[i], array[1].midRow[i], array[2].botRow[i], winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[0].topRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
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
}