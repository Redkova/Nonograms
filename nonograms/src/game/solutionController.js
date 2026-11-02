import { showSolution } from './gameLogic';

export default function createSolutionController({ patterns, patternSelector, gameField, timer }) {
  function showGameSolution() {
    const [difficulty, patternName] = patternSelector.value.split(':');
    const difficultyPatterns = patterns[difficulty];
    const solution = difficultyPatterns ? difficultyPatterns[patternName] : undefined;

    showSolution(solution, gameField);

    timer.stopTimer();
    timer.resetTimer();
  }

  return showGameSolution;
}
