function generateClues(pattern) {
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

export default generateClues;
