const container = document.getElementById('container')
const board = document.getElementById('htmlGameBoard');
const section = document.querySelectorAll('.section');
let marker = ''
let counter = 2










 const gameBoard = (function () {


    const _board = ["", "", "", "", "", "", "", "", ""]
    const getBoard = _board 
    function changeBoard(index) { 
        _board.splice(index, 1, `${marker}`)
        console.log(_board)
    }
    const resetBoard = () => {
        _board = ["", "", "", "", "", "", "", "", ""]
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


const gameOutcome = (function () {




})();

const clearDisplay = (function () {





})(); 

const controlPlay = (() => {
    const preventClick = (index) => {
        document.querySelectorAll(".section");
            section[index].className = "sectionfreeze";
           
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
    return {preventClick, activateClick}
})();



function newPlayer(name, token) {
    const getName = () => name
    const getToken = () => token
     return { getName, getToken}
};

const playerOne = newPlayer(prompt("Enter Player One Name"), "X");
const playerTwo = newPlayer(prompt("Enter Player Two Name"), "O");


section.forEach((div) => {
    let index = div.getAttribute("value")
    div.addEventListener("click", () => {
        console.log('Hello ' + `${index}`)   
        gameCount.addOX()
        gameBoard.changeBoard(index)
        div.innerHTML = `${gameBoard.getBoard[index]}`
        controlPlay.preventClick(index)

    });

}); 