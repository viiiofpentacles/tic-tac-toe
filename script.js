const gameboard = (() => {
    const gameBoardContainer = document.getElementById("gameboard-container");

    const gameBoardSquares = [];

    const createGameBoardSquares = (() => {
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
                square.removeEventListener("click", addMark, false)
            }else{
                square.textContent = "○";
                squareIndex = gameBoardSquares.indexOf(square);
                gameBoardSquares[squareIndex] = "o";
                square.removeEventListener("click", addMark, false)
            }
        }

        gameBoardContainer.appendChild(square);
        gameBoardSquares.push(square);
        }
                  
    })();

    return {gameBoardSquares};

})()

const gamePlay = () => {

    const winningConditions = [
        "0,1,2",
        "3,4,5",
        "6,7,8",
        "0,3,6",
        "1,4,7",
        "2,5,8",
        "0,4,8",
        "2,4,6"
    ]

    //return indexof x and o in array as string and compare to winningConditions
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
    
    if(winningConditions.includes(convertedArrayX)===true){
        console.log("Winner is X")
    }else if(winningConditions.includes(convertedArrayO)===true){
        console.log("Winner is O")
    }else{
        console.log("It's a draw")
    }
}


