import { saveGame as saveGameToStorage, loadGame } from '../storage/storage';
import { capitalize } from '../utils/formatters';

export default function createGameController({ gameField, patternSelector, timer, updateGame }) {
  function saveGame() {
    const cells = Array.from(gameField.querySelectorAll('.cell'));

    const gameState = cells.map((cell) => ({
      row: cell.dataset.row,
      col: cell.dataset.col,
      active: cell.classList.contains('active'),
      cross: cell.classList.contains('cross'),
    }));

    const savedData = {
      patternName: patternSelector.value,
      gameState,
      timeCounter: timer.getTime(),
    };

    saveGameToStorage(savedData);
  }

  function continueGame() {
    const savedData = loadGame();

    if (!savedData) {
      return;
    }
    timer.stopTimer();

    const { patternName, gameState, timeCounter: savedTimeCounter } = savedData;

    const patternNameOnly = patternName.split(':').pop().trim();

    const optionExists = Array.from(patternSelector.options).some((option) => option.value === patternName);

    if (!optionExists) {
      const newOption = document.createElement('option');

      newOption.value = patternName;
      newOption.textContent = capitalize(patternNameOnly);

      patternSelector.appendChild(newOption);
    }

    patternSelector.value = patternName;
    patternSelector.disabled = false;

    updateGame(patternName);

    gameState.forEach(({ row, col, active, cross }) => {
      const cell = gameField.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);

      if (!cell) {
        return;
      }

      if (active) {
        cell.classList.add('active');
      }

      if (cross) {
        cell.classList.add('cross');
      }
    });

    timer.setTime(savedTimeCounter);
    timer.startTimer();
  }

  return {
    saveGame,
    continueGame,
  };
}
