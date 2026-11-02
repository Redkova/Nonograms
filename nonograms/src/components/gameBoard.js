function createGameField(gameField, pattern, onCellClick, onCellContextMenu) {
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

      if ((col + 1) % 5 === 0) {
        td.style.borderRight = '4px solid black';
      }

      td.addEventListener('click', () => {
        onCellClick(td);
      });
      td.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        onCellContextMenu(td);
      });
      tr.appendChild(td);
    }
    if ((row + 1) % 5 === 0) {
      tr.style.borderBottom = '4px solid black';
    }

    table.appendChild(tr);
  }
  table.style.borderSpacing = '0';
  gameField.appendChild(table);
}

export default createGameField;
