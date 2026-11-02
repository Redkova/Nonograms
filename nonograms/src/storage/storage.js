const GAME_STORAGE_KEY = 'nonogramGame';
const LAST_WINS_STORAGE_KEY = 'lastWins';

export function saveGame(data) {
  localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(data));
}

export function loadGame() {
  const savedData = localStorage.getItem(GAME_STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : null;
}

export function saveLastWin(win) {
  const lastWins = getLastWins();

  lastWins.push(win);

  if (lastWins.length > 5) {
    lastWins.shift();
  }

  localStorage.setItem(LAST_WINS_STORAGE_KEY, JSON.stringify(lastWins));
}

export function getLastWins() {
  const savedData = localStorage.getItem(LAST_WINS_STORAGE_KEY);

  return savedData ? JSON.parse(savedData) : [];
}
