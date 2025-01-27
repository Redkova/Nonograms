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
      gameField.appendChild(cell);
    }
  }
}

function createTopClues () {
  for (let row = 0; row < 5; row++) {
    const topClueCell = document.createElement('div');
    topClueCell.classList.add('top-clue-cell');
    topClues.appendChild(topClueCell);
  }
}

function createLeftClues () {
  for (let col = 0; col < 5; col++) {
    const leftClueCell = document.createElement('div');
    leftClueCell.classList.add('left-clue-cell');
    leftClues.appendChild(leftClueCell);
  }
}

createGameField();
createTopClues();
createLeftClues();
