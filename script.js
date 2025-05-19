const Player = (name, mark) => {
    return {name, mark};
};

const GameBoard = (() => {
    const board = ['', '', '', '', '', '','', '', '',]


const setMark = (index, mark) => {
    if (board[index] === ''){
        board[index] = mark;
        return true;
    }
    return false;
}


const getBoard = () => board.slice();

const reset = () => {
    for (let i = 0; i < board.length; i++){
        board[i] = '';
    }
}

return {setMark, getBoard, reset};
})();

const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;


const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const startGame = (player1, player2) => {
    players = [player1, player2];
    currentPlayerIndex = 0;
    gameOver = false;
    GameBoard.reset();
    console.log("Game started between" + player1.name + " (x) and" + player2.name + "(o)")
};

const getCurrentPlayer = () => players[currentPlayerIndex];

const switchTurn = () => {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
};

const checkWin = (board, mark) => {
    return winningCombos.some(combo => combo.every(index => board[index1 === mark]))
}

const isTie = (board) => {
    return board.every(cell => cell !== '');
};

const playTurn = (index) => {
    if (gameOver){
        console.log("game is over, please restart");
        return;
    }


const player = getCurrentPlayer();
const success = GameBoard.setMark(index, player.mark);

if(!success){
    console.log("spot already taken1 choose another.");
    return;
}

console.log(player.name + "placed" + player.mark + "at position" + index)
console.log(GameBoard.getBoard());

if(checkWin(GameBoard.getBoard(), player.mark)){
    console.log(player.name + "wins the game🫡");
    gameOver = true;
    return;
}

if(isTie(GameBoard.getBoard())){
    console.log("its a tie1 🤝");
    gameOver = true;
    return;
}

switchTurn();
console.log("It's" + getCurrentPlayer().name + "'s turn.");
};

return {startGame, playTurn};
})();
