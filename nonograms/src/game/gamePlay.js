import { checkPattern } from './gameLogic';

export default function createGameplay({ timer, gameField, modals, playSound, getCurrentGame, saveLastWin }) {
  function handleCellAction(cell, action, sound) {
    timer.startTimer();

    action(cell);

    const { solution, patternName, difficulty } = getCurrentGame();

    if (solution && checkPattern(solution, gameField)) {
      timer.stopTimer();

      modals.showPopupMessage(`Great! You have solved the nonogram in ${timer.getTime()} seconds!`, () => {
        setTimeout(() => {
          playSound('assets/sounds/soundWin.mp3');
        }, 100);
      });

      saveLastWin({
        patternName,
        difficulty,
        time: timer.getTime(),
      });
    }

    playSound(sound);
  }

  return handleCellAction;
}
