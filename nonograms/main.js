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

const gameControl = document.createElement('div');
gameControl.classList.add('game-control');

const patternSelector = document.createElement('select');
patternSelector.classList.add('pattern-selector');

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.classList.add('button');

const saveButton = document.createElement('button');
saveButton.textContent = 'Save Game';
saveButton.classList.add('button');

gameControl.append(patternSelector, resetButton, saveButton);

main.append(
  header,
  title,
  gameSection,
  gameControl,
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

resetButton.addEventListener('click', () => {
  resetGame();
});

function resetGame () {
  const currentPattern = patterns[patternSelector.value];
  createGameField(currentPattern);
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
  };

  localStorage.setItem('nonogramGame', JSON.stringify(savedData));
}
