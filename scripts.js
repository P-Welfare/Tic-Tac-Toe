const container = document.getElementById('container')
const board = document.getElementById('htmlGameBoard');
const section = document.querySelectorAll('.section');
let marker = ''
let counter = 2

function newPlayer(name, token) {
    const getName = () => name
    const getToken = () => token
     return { getName, getToken}
};

const playerOne = newPlayer(prompt("Enter Player One Name"), "X");
const playerTwo = newPlayer(prompt("Enter Player Two Name"), "O");









 const gameBoard = (function (index) {


    const _board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    const getBoard = _board 
    function changeBoard(index) { 
        _board.splice(index, 1, `${marker}`)
        console.log(_board)
    }
    const resetBoard = () => {
        _board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
    }
        return {changeBoard, getBoard, resetBoard}
     

})();


const gameCount = (function () {

    const addOX = () => {


        if (counter % 2 == 0) {
            marker = 'X'
        } else if (counter % 2 == 1) {
            marker = 'O'
            
        }
        counter++
        console.log(counter)
    };

    return { addOX };
})();

const controlPlay = (() => {
    const preventClick = (index) => {
    document.querySelectorAll(".section");
    section[index].className = "sectionfreeze"
    };
    
    
    const preventClickAll = () => {
        document.querySelectorAll(".section");
        section.forEach((div) => {
                {div.className = "sectionfreeze" };

        }  )    
          
        }; 
    const activateClick = () => {
        document.getElementById('zero').className = "section";
        document.getElementById('one').className = "section";
        document.getElementById('two').className = "section";
        document.getElementById('three').className = "section";
        document.getElementById('four').className = "section";
        document.getElementById('five').className = "section";
        document.getElementById('six').className = "section";
        document.getElementById('seven').className = "section";
        document.getElementById('eight').className = "section";
    };
    return {preventClick, activateClick, preventClickAll}
})();



const gameOutcome = (function () {
    let result = '';
    const getResult = () => result;
    const resetResult = () => {
            result = "";
    }

    const printResult = () => {
    if (gameBoard.getBoard[0] === gameBoard.getBoard[1] && gameBoard.getBoard[0] === gameBoard.getBoard[2]) {
        if (gameBoard.getBoard[0] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('zero').style.backgroundColor = "#AEF359";
        document.getElementById('one').style.backgroundColor = "#AEF359";
        document.getElementById('two').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[3] === gameBoard.getBoard[4] && gameBoard.getBoard[3] === gameBoard.getBoard[5]) {
        if (gameBoard.getBoard[3] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('three').style.backgroundColor = "#AEF359";
        document.getElementById('four').style.backgroundColor = "#AEF359";
        document.getElementById('five').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[6] === gameBoard.getBoard[7] && gameBoard.getBoard[6] === gameBoard.getBoard[8]) {
        if (gameBoard.getBoard[6] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('six').style.backgroundColor = "#AEF359";
        document.getElementById('seven').style.backgroundColor = "#AEF359";
        document.getElementById('eight').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[0] === gameBoard.getBoard[3] && gameBoard.getBoard[0] === gameBoard.getBoard[6]) {
        if (gameBoard.getBoard[0] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('zero').style.backgroundColor = "#AEF359";
        document.getElementById('three').style.backgroundColor = "#AEF359";
        document.getElementById('six').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[1] === gameBoard.getBoard[4] && gameBoard.getBoard[1] === gameBoard.getBoard[7]) {
        if (gameBoard.getBoard[1] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('one').style.backgroundColor = "#AEF359";
        document.getElementById('four').style.backgroundColor = "#AEF359";
        document.getElementById('seven').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[2] === gameBoard.getBoard[5] && gameBoard.getBoard[2] === gameBoard.getBoard[8]) {
        if (gameBoard.getBoard[2] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('two').style.backgroundColor = "#AEF359";
        document.getElementById('five').style.backgroundColor = "#AEF359";
        document.getElementById('eight').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[0] === gameBoard.getBoard[4] && gameBoard.getBoard[0] === gameBoard.getBoard[8]) {
        if (gameBoard.getBoard[0] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('zero').style.backgroundColor = "#AEF359";
        document.getElementById('four').style.backgroundColor = "#AEF359";
        document.getElementById('eight').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[2] === gameBoard.getBoard[4] && gameBoard.getBoard[2] === gameBoard.getBoard[6]) {
        if (gameBoard.getBoard[2] === playerOne.getToken()) {
            result = `The winner is ${playerOne.getName()}`;
        } else { result = `The winner is ${playerTwo.getName()}`
        }
        document.getElementById('two').style.backgroundColor = "#AEF359";
        document.getElementById('four').style.backgroundColor = "#AEF359";
        document.getElementById('six').style.backgroundColor = "#AEF359"; 
        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
    } else if (gameBoard.getBoard[0] !== '0' && gameBoard.getBoard[1] !== '1' && gameBoard.getBoard[2] !== '2' && gameBoard.getBoard[3] !== '3' && gameBoard.getBoard[4] !== '4' && gameBoard.getBoard[5] !== '5' && gameBoard.getBoard[6] !== '6' && gameBoard.getBoard[7] !== '7' && gameBoard.getBoard[8] !== '8') {
        result = "It's a tie!";

        document.getElementById('printer').innerHTML = result;
        controlPlay.preventClickAll();
        result = "It's a tie!";
    };
    
}
return {getResult, printResult, resetResult, };
})(gameBoard.getBoard);

const clearDisplay = (function () {





})(); 




section.forEach((div) => {
    let index = div.getAttribute("value")
    div.addEventListener("click",  function(e) {
        console.log('Hello ' + `${index}`)   
        e.target.onclick = gameCount.addOX()
        e.target.onclick = gameBoard.changeBoard(index)
        e.target.onclick = div.innerHTML = `${gameBoard.getBoard[index]}`
        e.target.onclick = gameOutcome.printResult();
        e.target.onclick = controlPlay.preventClick(index);
    });

}); 