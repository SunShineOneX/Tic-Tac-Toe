let playerSun = false;
let playerCloud = false;
let playerCloudImage = "./assets/rain.png";
let playerSunImage = "./assets/sun.png";

let topLeft = document.getElementById("top-left");
let topMid = document.getElementById("top-mid");
let topRight = document.getElementById("top-right");
let midLeft = document.getElementById("mid-left");
let midMid = document.getElementById("mid-mid");
let midRight = document.getElementById("mid-right");
let botLeft = document.getElementById("bot-left");
let botMid = document.getElementById("bot-mid");
let botRight = document.getElementById("bot-right");


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

cloudButton.addEventListener("click", function (event) {

    playerTurn = 1;
    if (playerTurn > 0) {
        playerCloud = true;
        playerTurn--;
    } else {
        return playerCloud = false;
    }

})

topLeft.onclick = () => {
    if (playerSun === true && topLeftClicked === true) {
        topLeftImage.src = playerSunImage;
        playerSun = false;
        
        

    } else if (playerCloud === true && topLeftClicked === true) {
        topLeftImage.src = playerCloudImage;
        playerSun = true;
        topLeftCellVal = 2;
        
    }
    topLeftClicked = false;
}

topMid.onclick = () => {
    if (playerSun === true && topMidClicked === true) {
        topMidImage.src = playerSunImage;
        playerSun = false;
        
        ;
    } else if (playerCloud === true && topMidClicked === true) {
        topMidImage.src = playerCloudImage;
        playerSun = true;
        
    }
    topMidClicked = false;
}
topRight.onclick = () => {
    if (playerSun === true && topRightClicked === true) {
        topRightImage.src = playerSunImage;
        playerSun = false;
        
        
    } else if (playerCloud === true && topRightClicked === true) {
        topRightImage.src = playerCloudImage;
        playerSun = true;
        
    }
    topRightClicked = false;
}
midLeft.onclick = () => {
    if (playerSun === true && midLeftClicked === true) {
        midLeftImage.src = playerSunImage;
        playerSun = false;
        
       
    } else if (playerCloud === true && midLeftClicked === true) {
        midLeftImage.src = playerCloudImage;
        playerSun = true;
        
    }
    midLeftClicked = false;
}
midMid.onclick = () => {
    if (playerSun === true && midMidClicked === true) {
        midMidImage.src = playerSunImage;
        playerSun = false;
       
        
    } else if (playerCloud === true && midMidClicked === true) {
        midMidImage.src = playerCloudImage;
        playerSun = true;
        
    }
    midMidClicked = false;
}
midRight.onclick = () => {

    if (playerSun === true && midRightClicked === true) {
        midRightImage.src = playerSunImage;
        playerSun = false;
        
        
    } else if (playerCloud === true && midRightClicked === true) {
        midRightImage.src = playerCloudImage;
        playerSun = true;
        
    }
    midRightClicked = false;
}
botLeft.onclick = () => {

    if (playerSun === true && botLeftClicked === true) {
        botLeftImage.src = playerSunImage;
        playerSun = false;
       
        
    } else if (playerCloud === true && botLeftClicked === true) {
        botLeftImage.src = playerCloudImage;
        playerSun = true;
        
    }
    botLeftClicked = false;
}
botMid.onclick = () => {

    if (playerSun === true && botMidClicked === true) {
        botMidImage.src = playerSunImage;
        playerSun = false;
        
        
    } else if (playerCloud === true && botMidClicked === true) {
        botMidImage.src = playerCloudImage;
        playerSun = true;
        
    }
    botMidClicked = false;
}
botRight.onclick = () => {

    if (playerSun === true && botRightClicked === true) {
        botRightImage.src = playerSunImage;
        playerSun = false;
       
        
    } else if (playerCloud === true && botRightClicked === true) {
        botRightImage.src = playerCloudImage;
        playerSun = true;
        
    }
    botRightClicked = false;
}


