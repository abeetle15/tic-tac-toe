import { winningCombinations } from "./winning.js";
import { Dom } from './site.js'

export const Board = (function() {
  const matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  const players = [];
  let activePlayer;

  const changeActive = function () {
    Board.activePlayer = Board.activePlayer === players[0] ? players[1] : players[0];
  }

  const endGame = function() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Board.matrix[i][j] = null
      }
    };
    Dom.updateUi()
  }

  const checkEnd = function() {
    let winflag = false;
    // wins
    winningCombinations.forEach(combination => {
      const currentCombination = [];
      combination.forEach(pair => {
        let [i, j] = pair;
        currentCombination.push(matrix[i][j])
      });
      if (currentCombination.every(element => element === Board.activePlayer.token)) {
        Dom.alertDisplay('win', Board.activePlayer.token)
        winflag = true;
      }
    })
    // ties
    const allSquares = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        allSquares.push(matrix[i][j])
      }
    }

    if (!allSquares.includes(null) && !winflag) {
      Dom.alertDisplay('tie')
      return
    }
  };
  const consoleLog = function() {
    console.log(matrix)
    console.log(`Active player: ${Board.activePlayer.token}`)
  }
  return {matrix, players, activePlayer, changeActive, endGame, checkEnd, consoleLog}
})();

const createPlayer = function(token) {
  const playerToken = token;
  const addToBoard = function (i, j) {
    if (Board.matrix[i][j] !== null) {
      Dom.alertDisplay('illegal', Board.activePlayer.token)
      return
    }
    Board.matrix[i][j] = playerToken;
    Board.consoleLog();
    Board.checkEnd();
    Board.changeActive()
  } 
  return {token, addToBoard}
};

const playerX = createPlayer('X');
const playerO = createPlayer('O');

Board.players.push(playerX);
Board.players.push(playerO);
Board.activePlayer = Board.players[0];



