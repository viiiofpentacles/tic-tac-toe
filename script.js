const Gameboard = (() => {
    const gameBoardContainer = document.getElementById("gameboard-container");
    const createGameBoardSquares = (() => {
        const gameBoardSquares = [];
        for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        gameBoardContainer.appendChild(square);
        gameBoardSquares.push(square);
        }
        return gameBoardSquares;
    })();
    

})()