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

main.append(
  header,
  title,
  gameSection,
);

bodyElement.append(main);

function createGameField () {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
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

function createTopClues () {
  const clues = [1, 2, 3, 4, 5];
  for (let i = 0; i < 5; i++) {
    const topClueCell = document.createElement('div');
    topClueCell.classList.add('top-clue-cell');
    topClueCell.textContent = clues[i];
    topClues.appendChild(topClueCell);
  }
}

function createLeftClues () {
  const clues = [1, 2, 3, 4, 5];
  for (let i = 0; i < 5; i++) {
    const leftClueCell = document.createElement('div');
    leftClueCell.classList.add('left-clue-cell');
    leftClueCell.textContent = clues[i];
    leftClues.appendChild(leftClueCell);
  }
}

function markedCell (cell) {
  if (cell.classList.contains('active')) {
    cell.classList.remove('active');
    cell.classList.add('empty');
  } else {
    cell.classList.add('active');
    cell.classList.remove('empty');
  }
}

function crossedCell (cell) {
  if (cell.classList.contains('cross')) {
    cell.classList.remove('cross');
    cell.classList.add('empty');
  } else {
    cell.classList.add('cross');
    cell.classList.remove('empty', 'active');
  }
}

createGameField();
createTopClues();
createLeftClues();
