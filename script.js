const gameboard = (() => {
    const gameBoardContainer = document.getElementById("gameboard-container");

    const gameBoardSquares = [];

    const createGameBoardSquares = (() => {
        for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        
        square.addEventListener("click", () => {

            const numberOfX = gameBoardSquares.filter(square => square === "x");
            const numberOfO = gameBoardSquares.filter(square => square === "o");
           
            if(numberOfX.length === 0 || numberOfX.length === numberOfO.length || numberOfO.length > numberOfX.length){
                square.textContent = "☓";
                squareIndex = gameBoardSquares.indexOf(square);
                gameBoardSquares[squareIndex] = "x";
            }else{
                square.textContent = "○";
                squareIndex = gameBoardSquares.indexOf(square);
                gameBoardSquares[squareIndex] = "o";
            }
        })

        gameBoardContainer.appendChild(square);
        gameBoardSquares.push(square);
        }
        
    })();

    return {gameBoardSquares};

})()

// Winning conditions used to check for winner 
const gamePlay = () => {

}