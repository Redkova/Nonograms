const bodyElement = document.body;

const main = document.createElement('main');
main.classList.add('main');

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.textContent = 'NONOGRAMS';
title.classList.add('title');

const gameSection = document.createElement('div');
gameSection.classList.add('game-section');

const topClues = document.createElement('div');
topClues.classList.add('top-clues');

const leftClues = document.createElement('div');
leftClues.classList.add('left-clues');

const gameField = document.createElement('div');
gameField.classList.add('game-field');

gameSection.append(topClues, leftClues, gameField);

const patternSelector = document.createElement('select');
patternSelector.classList.add('pattern-selector');

main.append(
  header,
  title,
  gameSection,
  patternSelector,
);

bodyElement.append(main);

const patterns = {
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
};

Object.keys(patterns).forEach((patternName) => {
  const option = document.createElement('option');
  option.value = patternName;
  option.textContent = patternName;
  patternSelector.appendChild(option);
});

function createGameField (pattern) {
  gameField.innerHTML = '';
  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[0].length; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener('click', () => markedCell(cell));
      cell.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        crossedCell(cell);
      });
      gameField.appendChild(cell);
    }
  }
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
  colClues.forEach((clue) => {
    const clueCell = document.createElement('div');
    clueCell.classList.add('top-clue-cell');
    clueCell.textContent = clue.join(' ');
    topClues.appendChild(clueCell);
  });
}

function createLeftClues (rowClues) {
  leftClues.innerHTML = '';
  leftClues.innerHTML = '';
  rowClues.forEach((clue) => {
    const clueCell = document.createElement('div');
    clueCell.classList.add('left-clue-cell');
    clueCell.textContent = clue.join(' ');
    leftClues.appendChild(clueCell);
  });
}

function markedCell (cell) {
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
  if (cell.classList.contains('cross')) {
    cell.classList.remove('cross');
    cell.classList.add('empty');
  } else {
    cell.classList.add('cross');
    cell.classList.remove('empty', 'active');
  }
  checkPattern();
}

function checkPattern () {
  const solution = patterns[patternSelector.value];

  for (let row = 0; row < solution.length; row++) {
    for (let col = 0; col < solution[row].length; col++) {
      const cell = gameField.querySelector(
        `.cell[data-row="${row}"][data-col="${col}"]`,
      );
      const isActive = cell.classList.contains('active');

      if ((solution[row][col] === 1 && !isActive) || (solution[row][col] === 0 && isActive)) {
        return;
      }
    }
  }
  alert('Great! You have solved the nonogram!');
}

function updateGame (patternName) {
  const pattern = patterns[patternName];
  const { rowClues, colClues } = generateClues(pattern);

  createGameField(pattern);
  createTopClues(colClues);
  createLeftClues(rowClues);
}

patternSelector.addEventListener('change', (e) => {
  updateGame(e.target.value);
});

updateGame('heart');
