import { capitalize } from '../utils/formatters';

export default function createGameLevels({
  patterns,
  patternSelector,
  timer,
  resetGame,
  renderGame,
  setCurrentGame,
}) {
  function updatePatternSelector(difficulty) {
    patternSelector.innerHTML = '';

    Object.keys(patterns[difficulty]).forEach((patternName) => {
      const option = document.createElement('option');

      option.value = `${difficulty}:${patternName}`;
      option.textContent = capitalize(patternName);

      patternSelector.appendChild(option);
    });

    patternSelector.value = `${difficulty}:${Object.keys(patterns[difficulty])[0]}`;

    startGame();
  }

  function startGame() {
    const selectedValue = patternSelector.value;

    if (!selectedValue) return;

    updateGame(selectedValue);
  }

  function updateGame(selectedPattern) {
    const [difficulty, patternName] = selectedPattern.split(':');
    const pattern = patterns[difficulty] ? patterns[difficulty][patternName] : undefined;

    if (!pattern) return;

    setCurrentGame(difficulty, patternName);
    renderGame(pattern);
  }

  function startRandomGame() {
    resetGame();

    patternSelector.disabled = true;

    const randomLevels = ['easy', 'medium', 'hard'];

    const difficulty = randomLevels[Math.floor(Math.random() * randomLevels.length)];

    const patternNames = Object.keys(patterns[difficulty]);

    const patternName = patternNames[Math.floor(Math.random() * patternNames.length)];

    const selectedPattern = `${difficulty}:${patternName}`;

    const optionExists = Array.from(patternSelector.options).some(
      (option) => option.value === selectedPattern,
    );

    if (!optionExists) {
      const newOption = document.createElement('option');

      newOption.value = selectedPattern;
      newOption.textContent = capitalize(patternName);

      patternSelector.appendChild(newOption);
    }

    patternSelector.value = selectedPattern;

    updateGame(selectedPattern);
  }

  function selectDifficulty(difficulty) {
    timer.stopTimer();
    timer.resetTimer();

    setCurrentGame(null, null);

    patternSelector.disabled = false;

    updatePatternSelector(difficulty);
  }

  function handlePatternChange(event) {
    timer.stopTimer();
    timer.resetTimer();

    updateGame(event.target.value);
  }

  return {
    updatePatternSelector,
    startGame,
    startRandomGame,
    updateGame,
    selectDifficulty,
    handlePatternChange,
  };
}
