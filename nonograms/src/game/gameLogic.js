export function markCell(cell) {
  if (cell.classList.contains('cross')) {
    cell.classList.remove('cross');
    cell.classList.add('active');
  } else if (cell.classList.contains('active')) {
    cell.classList.remove('active');
    cell.classList.add('empty');
  } else {
    cell.classList.add('active');
    cell.classList.remove('empty');
  }
}

export function crossCell(cell) {
  if (cell.classList.contains('cross')) {
    cell.classList.remove('cross');
    cell.classList.add('empty');
  } else {
    cell.classList.add('cross');
    cell.classList.remove('empty', 'active');
  }
}

export function checkPattern(solution, gameField) {
  for (let row = 0; row < solution.length; row++) {
    for (let col = 0; col < solution[row].length; col++) {
      const cell = gameField.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);

      if (!cell) {
        return false;
      }

      const isActive = cell.classList.contains('active');

      if ((solution[row][col] === 1 && !isActive) || (solution[row][col] === 0 && isActive)) {
        return false;
      }
    }
  }

  return true;
}

export function resetGameField(gameField) {
  const cells = gameField.querySelectorAll('.cell');

  cells.forEach((cell) => {
    cell.classList.remove('active', 'cross');
  });
}

export function showSolution(solution, gameField) {
  if (!solution) {
    return;
  }

  for (let row = 0; row < solution.length; row++) {
    for (let col = 0; col < solution[row].length; col++) {
      const cell = gameField.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);

      if (cell) {
        if (solution[row][col] === 1) {
          cell.classList.add('active');
          cell.classList.remove('cross', 'empty');
        } else {
          cell.classList.remove('active');
          cell.classList.add('empty');
        }
      }
    }
  }
}
