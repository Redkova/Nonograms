const bodyElement = document.body;

const main = document.createElement('main');
main.classList.add('main');

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.textContent = 'NONOGRAMS';
title.classList.add('title');

const gameTimer = document.createElement('div');
gameTimer.textContent = '00:00';
gameTimer.classList.add('timer');

const levels = document.createElement('div');
levels.classList.add('levels');

const easyButton = document.createElement('button');
easyButton.textContent = 'Easy';
easyButton.classList.add('button');

const mediumButton = document.createElement('button');
mediumButton.textContent = 'Medium';
mediumButton.classList.add('button');

const hardButton = document.createElement('button');
hardButton.textContent = 'Hard';
hardButton.classList.add('button');

const randomButton = document.createElement('button');
randomButton.textContent = 'Random Game';
randomButton.classList.add('button');

levels.append(easyButton, mediumButton, hardButton, randomButton);

const gameMain = document.createElement('div');
gameMain.classList.add('game-main');

const emptyColumn = document.createElement('div');

const gameControl = document.createElement('div');
gameControl.classList.add('game-control');

const patternSelectorSection = document.createElement('div');
patternSelectorSection.classList.add('pattern-section');

const patSelectorText = document.createElement('h4');
patSelectorText.textContent = 'Choose picture';
patSelectorText.classList.add('pattern-selector-text');

const patternSelector = document.createElement('select');
patternSelector.classList.add('pattern-selector');

patternSelectorSection.append(patSelectorText, patternSelector);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.classList.add('game-control-button');

const saveButton = document.createElement('button');
saveButton.textContent = 'Save Game';
saveButton.classList.add('game-control-button');

const continueButton = document.createElement('button');
continueButton.textContent = 'Continue Last Game';
continueButton.classList.add('game-control-button');

const solutionButton = document.createElement('button');
solutionButton.textContent = 'Solution';
solutionButton.classList.add('game-control-button');

const lastWinsButton = document.createElement('button');
lastWinsButton.textContent = 'Last wins';
lastWinsButton.classList.add('game-control-button');

gameControl.append(
  patternSelectorSection,
  resetButton,
  saveButton,
  continueButton,
  solutionButton,
  lastWinsButton,
);

const fieldSection = document.createElement('div');
fieldSection.classList.add('field-section');

const gameSection = document.createElement('div');
gameSection.classList.add('game-section');

const topClues = document.createElement('div');
topClues.classList.add('top-clues');

const leftClues = document.createElement('div');
leftClues.classList.add('left-clues');

const gameField = document.createElement('div');
gameField.classList.add('game-field');

gameSection.append(topClues, leftClues, gameField);

fieldSection.appendChild(gameSection);

gameMain.append(emptyColumn, fieldSection, gameControl);

const popupOverlay = document.createElement('div');
popupOverlay.classList.add('popup-overlay');
popupOverlay.style.display = 'none';

const popupWindow = document.createElement('div');
popupWindow.classList.add('popup-window');

const popupClose = document.createElement('span');
popupClose.innerHTML = '&times;';
popupClose.classList.add('popup-close');

const popupMessage = document.createElement('p');
popupMessage.classList.add('popup-message');

popupWindow.append(popupMessage, popupClose);
popupOverlay.append(popupWindow);

const lastWinsModal = document.createElement('div');
lastWinsModal.classList.add('modal');

const lastWinsModalContent = document.createElement('div');
lastWinsModalContent.classList.add('modal-content');

const lastWinsModalClose = document.createElement('span');
lastWinsModalClose.innerHTML = '&times;';
lastWinsModalClose.classList.add('modal-close');

const lastWinsModalHeading = document.createElement('h4');
lastWinsModalHeading.textContent = 'High Scores:';
lastWinsModalHeading.classList.add('modal-heading');

const lastWinsModalList = document.createElement('ol');
lastWinsModalList.classList.add('modal-list');

lastWinsModal.appendChild(lastWinsModalContent);
lastWinsModalContent.append(lastWinsModalClose, lastWinsModalHeading, lastWinsModalList);

main.append(
  header,
  title,
  gameTimer,
  levels,
  gameMain,
  popupOverlay,
  lastWinsModal,
);

bodyElement.append(main);

const patterns = {
  easy: {
    heart: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    star: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
    ],
    camel: [
      [0, 1, 0, 0, 0],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ],
    clock: [
      [0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
    fountain: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
    ],
  },
  medium: {
    camera: [
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    locomotive: [
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    ],
    runner: [
      [1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
    cat: [
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    ],
    mushroom: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ],
  },
  hard: {
    elephant: [
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    ],
    swan: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    crocodile: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    umbrella: [
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
      [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0],
    ],
    cocktail: [
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
  },

};

function capitalizePatternName (patternName) {
  return patternName.charAt(0).toUpperCase() + patternName.slice(1);
}

function capitalizeDifficulty (difficulty) {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

patternSelector.addEventListener('change', startGame);

function updatePatternSelector (difficulty) {
  patternSelector.innerHTML = '';

  Object.keys(patterns[difficulty]).forEach((patternName) => {
    const option = document.createElement('option');
    option.value = `${difficulty}:${patternName}`;
    option.textContent = capitalizePatternName(patternName);
    patternSelector.appendChild(option);
  });
  patternSelector.value = `${difficulty}:${Object.keys(patterns[difficulty])[0]}`;
  startGame();
}
updatePatternSelector('easy');

function startGame () {
  const selectedValue = patternSelector.value;

  if (!selectedValue) {
    return;
  }

  const [difficulty, patternName] = selectedValue.split(':');

  if (!(patterns[difficulty] && patterns[difficulty][patternName])) {
    return;
  }
  const selectedPattern = patterns[difficulty][patternName];

  createGameField(selectedPattern);
  const { rowClues, colClues } = generateClues(selectedPattern);
  createTopClues(colClues);
  createLeftClues(rowClues);
}

function createGameField (pattern) {
  gameField.innerHTML = '';

  const table = document.createElement('table');
  table.classList.add('game-table');

  for (let row = 0; row < pattern.length; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < pattern[row].length; col++) {
      const td = document.createElement('td');
      td.classList.add('cell');
      td.dataset.row = row;
      td.dataset.col = col;

      td.addEventListener('click', () => markedCell(td));
      td.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        crossedCell(td);
      });
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  gameField.appendChild(table);
}

function generateClues (pattern) {
  const rows = pattern.length;
  const cols = pattern[0].length;

  const rowClues = pattern.map((row) => {
    const clues = [];
    let count = 0;

    row.forEach((cell) => {
      if (cell === 1) {
        count++;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    });
    if (count > 0) clues.push(count);

    return clues;
  });

  const colClues = [];
  for (let col = 0; col < cols; col++) {
    const clues = [];
    let count = 0;

    for (let row = 0; row < rows; row++) {
      if (pattern[row][col] === 1) {
        count++;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    }
    if (count > 0) clues.push(count);

    colClues.push(clues);
  }
  return { rowClues, colClues };
}

function createTopClues (colClues) {
  topClues.innerHTML = '';
  const table = document.createElement('table');
  table.classList.add('clue-table');

  const maxClues = Math.max(...colClues.map((clue) => clue.length));

  for (let i = 0; i < maxClues; i++) {
    const tr = document.createElement('tr');
    colClues.forEach((clue) => {
      const th = document.createElement('th');
      th.classList.add('top-clue');
      if (clue.length > i) {
        th.textContent = clue[i];
      }
      tr.appendChild(th);
    });
    table.appendChild(tr);
  }
  topClues.appendChild(table);
}

function createLeftClues (rowClues) {
  leftClues.innerHTML = '';
  const table = document.createElement('table');
  table.classList.add('clue-table');

  const maxClues = Math.max(...rowClues.map((clue) => clue.length));

  rowClues.forEach((clue) => {
    const tr = document.createElement('tr');

    for (let i = 0; i < maxClues; i++) {
      const th = document.createElement('th');
      th.classList.add('left-clue');

      if (clue.length > i) {
        th.textContent = clue[clue.length - 1 - i];
      } else {
        th.textContent = '';
      }
      if (clue.length === 1 && i === 0) {
        tr.appendChild(th);
      } else {
        tr.insertBefore(th, tr.firstChild);
      }
    }

    table.appendChild(tr);
  });
  leftClues.appendChild(table);
}

easyButton.addEventListener('click', () => {
  updatePatternSelector('easy');
  stopTimer();
  resetTimer();
  startGame();
});

mediumButton.addEventListener('click', () => {
  updatePatternSelector('medium');
  stopTimer();
  resetTimer();
  startGame();
});

hardButton.addEventListener('click', () => {
  updatePatternSelector('hard');
  stopTimer();
  resetTimer();
  startGame();
});

let timer = null;
let timeCounter = 0;

function startTimer () {
  if (timer) return;

  timer = setInterval(() => {
    timeCounter++;
    const minutes = Math.floor(timeCounter / 60).toString().padStart(2, '0');
    const seconds = (timeCounter % 60).toString().padStart(2, '0');
    gameTimer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopTimer () {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer () {
  stopTimer();
  timeCounter = 0;
  gameTimer.textContent = '00:00';
}

function updateTimerDisplay () {
  const minutes = Math.floor(timeCounter / 60);
  const seconds = timeCounter % 60;

  gameTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

function markedCell (cell) {
  if (!timer) startTimer();

  if (cell.classList.contains('active')) {
    cell.classList.remove('active');
    cell.classList.add('empty');
  } else {
    cell.classList.add('active');
    cell.classList.remove('empty');
  }
  checkPattern();
}

function crossedCell (cell) {
  if (!timer) startTimer();

  if (cell.classList.contains('cross')) {
    cell.classList.remove('cross');
    cell.classList.add('empty');
  } else {
    cell.classList.add('cross');
    cell.classList.remove('empty', 'active');
  }
  checkPattern();
}

let currentLevel = null;
let currentPatternName = null;

function checkPattern () {
  const difficulty = currentLevel || (patternSelector.value ? patternSelector.value.split(':')[0] : null);
  const patternName = currentPatternName || (patternSelector.value ? patternSelector.value.split(':')[1] : null);

  if (!difficulty || !patternName) {
    return;
  }

  const solution = patterns[difficulty] && patterns[difficulty][patternName];

  if (!solution) {
    return;
  }

  for (let row = 0; row < solution.length; row++) {
    for (let col = 0; col < solution[row].length; col++) {
      const cell = gameField.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
      const isActive = cell.classList.contains('active');

      if ((solution[row][col] === 1 && !isActive) || (solution[row][col] === 0 && isActive)) {
        return;
      }
    }
  }
  stopTimer();
  showPopupMessage(`Great! You have solved the nonogram in ${timeCounter} seconds!`);
  saveLastWins(patternName, difficulty, timeCounter);
}

randomButton.addEventListener('click', () => {
  startRandomGame();
  stopTimer();
  resetTimer();
});

function startRandomGame () {
  resetGame();

  const randomLevels = ['easy', 'medium', 'hard'];
  currentLevel = randomLevels[Math.floor(Math.random() * randomLevels.length)];
  currentPatternName = Object.keys(patterns[currentLevel])[Math.floor(Math.random()
    * Object.keys(patterns[currentLevel]).length)];

  const selectedPattern = `${currentLevel}:${currentPatternName}`;
  const patternNameOnly = currentPatternName.charAt(0).toUpperCase()
  + currentPatternName.slice(1).toLowerCase();

  if (patternSelector) {
    if (!Array.from(patternSelector.options).some((option) => option.value === selectedPattern)) {
      const newOption = document.createElement('option');
      newOption.value = selectedPattern;
      newOption.textContent = patternNameOnly;
      patternSelector.appendChild(newOption);
    }
    patternSelector.value = selectedPattern;
  }
  updateGame(selectedPattern);
}

function updateGame (selectedPattern) {
  const [difficulty, patternName] = selectedPattern.split(':');
  const pattern = patterns[difficulty][patternName];
  const { rowClues, colClues } = generateClues(pattern);

  createGameField(pattern);
  createTopClues(colClues);
  createLeftClues(rowClues);
}

patternSelector.addEventListener('change', (e) => {
  stopTimer();
  resetTimer();
  updateGame(e.target.value);
});

resetButton.addEventListener('click', resetGame);

function resetGame () {
  stopTimer();
  resetTimer();

  const cells = Array.from(gameField.querySelectorAll('.cell'));
  cells.forEach((cell) => {
    cell.classList.remove('active', 'cross');
  });
}

saveButton.addEventListener('click', () => {
  saveGame();
});

function saveGame () {
  const cells = Array.from(gameField.querySelectorAll('.cell'));
  const gameState = cells.map((cell) => ({
    row: cell.dataset.row,
    col: cell.dataset.col,
    active: cell.classList.contains('active'),
    cross: cell.classList.contains('cross'),
  }));

  const currentPattern = patternSelector.value;

  const savedData = {
    patternName: currentPattern,
    gameState,
    timeCounter,
  };

  localStorage.setItem('nonogramGame', JSON.stringify(savedData));
}

continueButton.addEventListener('click', () => {
  continueGame();
});

function continueGame () {
  const savedData = localStorage.getItem('nonogramGame');

  if (!savedData) {
    return;
  }

  const {
    patternName, gameState, timeCounter: savedTimeCounter,
  } = JSON.parse(savedData);

  const patternNameOnly = patternName.split(':').pop().trim();

  if (!Array.from(patternSelector.options).some((option) => option.value === patternName)) {
    const newOption = document.createElement('option');
    newOption.value = patternNameOnly;
    newOption.textContent = patternNameOnly.charAt(0).toUpperCase()
    + patternNameOnly.slice(1).toLowerCase();
    patternSelector.appendChild(newOption);
  }

  patternSelector.value = patternNameOnly;

  updateGame(patternName);

  gameState.forEach(({
    row, col, active, cross,
  }) => {
    const cell = gameField.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

    if (active) {
      cell.classList.add('active');
    }
    if (cross) {
      cell.classList.add('cross');
    }
  });
  timeCounter = savedTimeCounter;
  updateTimerDisplay();
  startTimer();
}

function showPopupMessage (message) {
  popupOverlay.style.display = 'flex';
  popupMessage.textContent = message;
  main.classList.add('inactive');
  popupClose.addEventListener('click', closePopup);
}

function closePopup () {
  popupOverlay.style.display = 'none';
  main.classList.remove('inactive');
}

solutionButton.addEventListener('click', () => {
  showSolution();
  stopTimer();
  resetTimer();
});
function showSolution () {
  const [difficulty, patternName] = patternSelector.value.split(':');
  const solution = patterns[difficulty] && patterns[difficulty][patternName];

  if (!solution) {
    return;
  }
  for (let row = 0; row < solution.length; row++) {
    for (let col = 0; col < solution[row].length; col++) {
      const cell = gameField.querySelector(
        `.cell[data-row="${row}"][data-col="${col}"]`,
      );

      if (solution[row][col] === 1) {
        cell.classList.add('active');
      } else {
        cell.classList.remove('active');
      }
    }
  }
}

function saveLastWins (patternName, difficulty, time) {
  const lastWins = JSON.parse(localStorage.getItem('lastWins')) || [];

  lastWins.push({ patternName, difficulty, time });

  if (lastWins.length > 5) {
    lastWins.shift();
  }

  lastWins.sort((a, b) => a.time - b.time);

  localStorage.setItem('lastWins', JSON.stringify(lastWins));
}

function formatTime (time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

lastWinsButton.addEventListener('click', () => {
  showLastWinsModal();
});

function showLastWinsModal () {
  lastWinsModal.style.display = 'flex';
  const highScores = JSON.parse(localStorage.getItem('lastWins')) || [];

  lastWinsModalList.innerHTML = '';

  highScores.forEach(({ patternName, difficulty, time }) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>&#9998;  ${capitalizePatternName(patternName)}</span><span>${capitalizeDifficulty(difficulty)}</span><span>${formatTime(time)}</span>`;
    lastWinsModalList.appendChild(li);
  });

  lastWinsModalClose.addEventListener('click', () => {
    closeLastWinsModal();
  });
}

function closeLastWinsModal () {
  lastWinsModal.style.display = 'none';
}
