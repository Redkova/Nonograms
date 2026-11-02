export default function setupGameListeners({
  easyButton,
  mediumButton,
  hardButton,
  randomButton,
  resetButton,
  saveButton,
  continueButton,
  solutionButton,
  lastWinsButton,
  patternSelector,
  onSelectDifficulty,
  onRandomGame,
  onReset,
  onSave,
  onContinue,
  onShowSolution,
  onShowLastWins,
  onPatternChange,
}) {
  easyButton.addEventListener('click', () => {
    onSelectDifficulty('easy');
  });

  mediumButton.addEventListener('click', () => {
    onSelectDifficulty('medium');
  });

  hardButton.addEventListener('click', () => {
    onSelectDifficulty('hard');
  });

  randomButton.addEventListener('click', onRandomGame);
  resetButton.addEventListener('click', onReset);
  saveButton.addEventListener('click', onSave);
  continueButton.addEventListener('click', onContinue);
  solutionButton.addEventListener('click', onShowSolution);
  lastWinsButton.addEventListener('click', onShowLastWins);

  patternSelector.addEventListener('change', onPatternChange);
}
