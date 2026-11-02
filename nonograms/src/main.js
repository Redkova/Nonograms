import '../style.scss';
import { patterns } from './data/patterns';
import createLayout from './components/layout';
import createTimer from './game/timer';
import { saveLastWin, getLastWins } from './storage/storage';
import createSound from './components/sound';
import toggleTheme from './components/theme';
import createModals from './components/modals';
import { markCell, crossCell, resetGameField } from './game/gameLogic';
import createGameController from './game/gameController';
import createBurgerMenu from './components/burger';
import setupGameListeners from './components/gameControlButtons';
import createGameplay from './game/gamePlay';
import createGameLevels from './game/gameLevels';
import renderGameBoard from './components/renderGameBoard';
import createSolutionController from './game/solutionController';

const elements = createLayout();
const {
  main,
  soundButton,
  burgerButton,
  burgerMenu,
  burgerMenuContent,
  easyButton,
  mediumButton,
  hardButton,
  randomButton,
  gameTimer,
  patternSelector,
  gameField,
  topClues,
  leftClues,
  checkbox,
  resetButton,
  saveButton,
  continueButton,
  solutionButton,
  lastWinsButton,
  popupOverlay,
  popupMessage,
  popupClose,
  lastWinsModal,
  lastWinsModalList,
  lastWinsModalClose,
} = elements;
const timer = createTimer(gameTimer);
const playSound = createSound(soundButton);
const modals = createModals({
  main,
  popupOverlay,
  popupMessage,
  popupClose,
  lastWinsModal,
  lastWinsModalList,
  lastWinsModalClose,
});
toggleTheme(checkbox);

document.body.append(main);

createBurgerMenu({
  burgerButton,
  burgerMenu,
  burgerMenuContent,
});

let currentLevel = null;
let currentPatternName = null;

const handleCellAction = createGameplay({
  timer,
  gameField,
  modals,
  playSound,
  saveLastWin,

  getCurrentGame: () => {
    const levelPatterns = patterns[currentLevel];

    return {
      solution: levelPatterns ? levelPatterns[currentPatternName] : undefined,
      patternName: currentPatternName,
      difficulty: currentLevel,
    };
  },
});

const renderGame = renderGameBoard({
  gameField,
  topClues,
  leftClues,

  onCellMark: (cell) => {
    handleCellAction(cell, markCell, 'assets/sounds/sound3.mp3');
  },

  onCellCross: (cell) => {
    handleCellAction(cell, crossCell, 'assets/sounds/sound2.mp3');
  },
});

function resetGame() {
  timer.stopTimer();
  timer.resetTimer();

  resetGameField(gameField);
}

const gameLevels = createGameLevels({
  patterns,
  patternSelector,
  timer,
  resetGame,
  renderGame,

  setCurrentGame: (difficulty, patternName) => {
    currentLevel = difficulty;
    currentPatternName = patternName;
  },
});

const gameController = createGameController({
  gameField,
  patternSelector,
  timer,
  updateGame: gameLevels.updateGame,
});

gameLevels.updatePatternSelector('easy');

const showGameSolution = createSolutionController({
  patterns,
  patternSelector,
  gameField,
  timer,
});

function showLastWins() {
  modals.showLastWinsModal(getLastWins());
}

setupGameListeners({
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

  onSelectDifficulty: gameLevels.selectDifficulty,
  onRandomGame: gameLevels.startRandomGame,
  onReset: resetGame,
  onSave: gameController.saveGame,
  onContinue: gameController.continueGame,
  onShowSolution: showGameSolution,
  onShowLastWins: showLastWins,
  onPatternChange: gameLevels.handlePatternChange,
});
