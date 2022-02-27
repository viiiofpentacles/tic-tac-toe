const gameboard = (() => {
    const gameBoardContainer = document.getElementById("gameboard-container");

    const gameBoardSquares = [];

    const createGameBoardSquares = () => {
        for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        
        square.addEventListener("click", addMark)
        
        function addMark() {

            const numberOfX = gameBoardSquares.filter(square => square === "x");
            const numberOfO = gameBoardSquares.filter(square => square === "o");
           
            if(numberOfX.length === 0 || numberOfX.length === numberOfO.length || numberOfO.length > numberOfX.length){
                square.textContent = "☓";
                squareIndex = gameBoardSquares.indexOf(square);
                gameBoardSquares[squareIndex] = "x";
                square.removeEventListener("click", addMark, false);
                gamePlay();
                displayController();
            }else{
                square.textContent = "○";
                squareIndex = gameBoardSquares.indexOf(square);
                gameBoardSquares[squareIndex] = "o";
                square.removeEventListener("click", addMark, false);
                gamePlay();
                displayController();
            }
        }

        gameBoardContainer.appendChild(square);
        gameBoardSquares.push(square);
        }
                  
    }

    return {gameBoardSquares, createGameBoardSquares};

})();

const gamePlay = () => {

    //game currently does not cover all cases where there are 4 or more marks
    const winningConditions = [
        "0,1,2",
        "3,4,5",
        "6,7,8",
        "0,3,6",
        "1,4,7",
        "2,5,8",
        "0,4,8",
        "2,4,6",
        "0,2,4,6",
        "0,4,6,8",
        "2,6,7,8",
        "1,4,6,7",
        "3,4,5,7"
    ]

    let indexOfMarksX = [];
        (gameboard.gameBoardSquares).forEach((square, index) => {
        if(square === "x") {
            indexOfMarksX.push(index);
        return convertedArrayX = indexOfMarksX.toString();
        }
    })

    let indexOfMarksO = [];
        (gameboard.gameBoardSquares).forEach((square, index) => {
        if(square === "o") {
            indexOfMarksO.push(index);
        return convertedArrayO = indexOfMarksO.toString();
        }
    })

    if(indexOfMarksX.length>=3 && winningConditions.includes(convertedArrayX)===true){
        return winner = "playerX";
    }else if(indexOfMarksO.length>=3 && winningConditions.includes(convertedArrayO)===true){
        return winner = "playerO";
    }else if(indexOfMarksX.length >= 4 && indexOfMarksO.length >= 4) {
        return winner = "draw";
    }
    
}

const displayController = () => {
    const winnerDisplay = document.getElementById("winner-display");
    const gameBoardContainer = document.getElementById("gameboard-container");

    if(gamePlay()==="playerX") {
        winnerDisplay.textContent = "Player X is the winner!"
        gameBoardContainer.style.pointerEvents = "none"; 
    } else if(gamePlay() === "playerO") {
        winnerDisplay.textContent = "Player O is the winner!"
        gameBoardContainer.style.pointerEvents = "none"; 
    } else if(gamePlay() === "draw") {
        winnerDisplay.textContent = "It's a draw!"
        gameBoardContainer.style.pointerEvents = "none"; 
    }

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", () => {
        gameboard.gameBoardSquares.length = 0;
        while (gameBoardContainer.firstChild) {
            gameBoardContainer.removeChild(gameBoardContainer.firstChild);
        }
        gameboard.createGameBoardSquares()
        gameBoardContainer.style.pointerEvents = "";
        winnerDisplay.textContent = ""
    })
}





gameboard.createGameBoardSquares();