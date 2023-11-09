const container = document.getElementById('container')
const board = document.getElementById('htmlGameBoard');
const section = document.querySelectorAll('.section');
let marker = ''



section.forEach((div) => {
    let index = div.getAttribute("value")
    div.addEventListener("click", () => {


     console.log('Hello' + `${index}`)   
    
    gameCount.addOX()
    gameBoard.changeBoard(index)

});




/*function addToBoard(index) {
    _board.splice(index, 1, `${marker}`)
}
*/

});




 const gameBoard = (function () {


    const _board = ["", "", "", "", "", "", "", "", ""]
  
    function changeBoard(index) { 
        _board.splice(index, 1, `${marker}`)
        console.log(_board)
    }
        return {changeBoard}
     

})();






const displayController = (function () {
 // DOM METHOD BASED ON INDEXED DIVS


})();

const gameCount = (function () {

    const addOX = () => {
        let counter = 2
        if (counter % 2 == 0) {
            marker = 'X'
        } else if (counter % 2 == 1) {
            marker = 'O'
            
        }
        counter++
        
    };

    return { addOX };
})();


const gameOutcome = (function () {




})();

const clearDisplay = (function () {





})(); 

const controlPlay = (function () {




})();





function newPlayer(name) {
    this.name = name
    const getPlayerName = () => {

    };
     return { getPlayerName, name}
};
player1Name = ''
player2Name = ''
const player1 = newPlayer(player1Name);
const player2 = newPlayer(player2Name);




