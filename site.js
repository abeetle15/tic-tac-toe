import { squares, alertDiv, alertText, alertBtn, currentDisplay, currentToken } from './main.js';
import { Board } from './game.js'

export const Dom = (function () {
  function addSquareListeners() {
    let index = 0;
    const coordinates= [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
    squares.forEach(square => {
      const [i, j] = coordinates[index];
      square.addEventListener('click', () => {
        Board.activePlayer.addToBoard(i, j);
        updateUi();
      })
      index++;
    })
  };

  function updateUi() {
    let index = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        squares[index].textContent = Board.matrix[i][j];
        index++;
      }
    }
    currentToken.textContent = Board.activePlayer.token;
  };

  function alertDisplay (state, subject) {
    switch (state) {
      case 'illegal':
        alertText.textContent = `${subject}, you can't move there!`;
        alertBtn.textContent = "I get it";
        break;
      case 'win':
        alertText.textContent = `${subject} won the game!`;
        alertBtn.textContent = "Reset";
        alertBtn.addEventListener('click', ()=> {
          Board.endGame()
        });
        break
      case 'tie':
        alertText.textContent = "It's a tie you guys";
        alertBtn.textContent = "Reset";
        alertBtn.addEventListener('click', ()=> {
          Board.endGame()
        });
        break
    }
    currentDisplay.classList.add('hide');
    alertDiv.classList.add('active');
    alertBtn.addEventListener('click', ()=> {
      alertDiv.classList.remove('active');
      currentDisplay.classList.remove('hide');
    });
    console.log(`I triggered with ${state}`)
  }

  return { addSquareListeners, updateUi, alertDisplay}
})();