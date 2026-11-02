function createTopClues(topClues, colClues) {
  topClues.innerHTML = '';
  const table = document.createElement('table');
  table.classList.add('clue-table');

  const maxClues = Math.max(...colClues.map((clue) => clue.length));

  for (let i = 0; i < maxClues; i++) {
    const tr = document.createElement('tr');
    colClues.forEach((clue) => {
      const th = document.createElement('th');
      th.classList.add('top-clue');
      const reversedIndex = clue.length - maxClues + i;
      if (reversedIndex >= 0) {
        th.textContent = clue[reversedIndex];
      }
      tr.appendChild(th);
    });
    table.appendChild(tr);
  }
  table.style.borderSpacing = '0';
  table.style.borderCollapse = 'collapse';
  topClues.appendChild(table);
}

function createLeftClues(leftClues, rowClues) {
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
  table.style.borderSpacing = '0';
  table.style.borderCollapse = 'collapse';
  leftClues.appendChild(table);
}

export { createTopClues, createLeftClues };
