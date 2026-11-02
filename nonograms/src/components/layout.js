function createLayout() {
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('header');
  header.classList.add('header');

  const titlePicture = document.createElement('div');
  titlePicture.classList.add('title-img');

  header.appendChild(titlePicture);

  const soundSection = document.createElement('div');
  soundSection.classList.add('sound-section');

  const soundButton = document.createElement('button');
  soundButton.classList.add('sound-button');

  const burgerButton = document.createElement('button');
  burgerButton.classList.add('burger-button');

  const burgerMenu = document.createElement('div');
  burgerMenu.classList.add('burger-menu');

  const burgerMenuContent = document.createElement('div');
  burgerMenuContent.classList.add('burger-menu-content');

  burgerMenu.appendChild(burgerMenuContent);

  soundSection.append(soundButton, burgerButton, burgerMenu);

  const nonogram = document.createElement('div');
  nonogram.classList.add('nonogram');

  const levels = document.createElement('div');
  levels.classList.add('levels');

  const easyButton = document.createElement('button');
  easyButton.textContent = 'Easy';
  easyButton.classList.add('button');

  const mediumButton = document.createElement('button');
  mediumButton.textContent = 'Medium';
  mediumButton.classList.add('button');

  const hardButton = document.createElement('button');
  hardButton.textContent = 'Hard';
  hardButton.classList.add('button');

  const randomButton = document.createElement('button');
  randomButton.textContent = 'Random Game';
  randomButton.classList.add('button');

  levels.append(easyButton, mediumButton, hardButton, randomButton);

  const gameTimer = document.createElement('div');
  gameTimer.textContent = '00:00';
  gameTimer.classList.add('timer');

  const gameMain = document.createElement('div');
  gameMain.classList.add('game-main');

  const choosePictureSection = document.createElement('div');
  choosePictureSection.classList.add('choose-picture-section');

  const patternSelectorSection = document.createElement('div');
  patternSelectorSection.classList.add('pattern-section');

  const patSelectorText = document.createElement('h4');
  patSelectorText.textContent = 'Choose picture';
  patSelectorText.classList.add('pattern-selector-text');

  const patternSelector = document.createElement('select');
  patternSelector.classList.add('pattern-selector');

  patternSelectorSection.append(patSelectorText, patternSelector);

  choosePictureSection.appendChild(patternSelectorSection);

  const fieldSection = document.createElement('div');
  fieldSection.classList.add('field-section');

  const gameSection = document.createElement('div');
  gameSection.classList.add('game-section');

  const topClues = document.createElement('div');
  topClues.classList.add('top-clues');

  const leftClues = document.createElement('div');
  leftClues.classList.add('left-clues');

  const gameField = document.createElement('div');
  gameField.classList.add('game-field');

  gameSection.append(topClues, leftClues, gameField);

  const switchButtons = document.createElement('div');
  switchButtons.classList.add('switch-buttons');

  const themeSwitch = document.createElement('div');
  themeSwitch.classList.add('theme-switch');

  const themeName = document.createElement('span');
  themeName.textContent = 'Dark-mode:';
  themeName.classList.add('theme-text');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'theme-toggle';

  const label = document.createElement('label');
  label.setAttribute('for', 'theme-toggle');
  label.classList.add('switch');

  themeSwitch.append(themeName, checkbox, label);

  switchButtons.appendChild(themeSwitch);

  fieldSection.append(gameSection, switchButtons);

  const gameControl = document.createElement('div');
  gameControl.classList.add('game-control');

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Game';
  resetButton.classList.add('game-control-button');

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Game';
  saveButton.classList.add('game-control-button');

  const continueButton = document.createElement('button');
  continueButton.textContent = 'Continue Last Game';
  continueButton.classList.add('game-control-button');

  const solutionButton = document.createElement('button');
  solutionButton.textContent = 'Solution';
  solutionButton.classList.add('game-control-button');

  const lastWinsButton = document.createElement('button');
  lastWinsButton.textContent = 'Last wins';
  lastWinsButton.classList.add('game-control-button');

  gameControl.append(resetButton, saveButton, continueButton, solutionButton, lastWinsButton);

  gameMain.append(choosePictureSection, fieldSection, gameControl);

  const popupOverlay = document.createElement('div');
  popupOverlay.classList.add('popup-overlay');
  popupOverlay.style.display = 'none';

  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup-window');

  const popupClose = document.createElement('span');
  popupClose.innerHTML = '&times;';
  popupClose.classList.add('popup-close');

  const popupMessage = document.createElement('p');
  popupMessage.classList.add('popup-message');

  popupWindow.append(popupMessage, popupClose);
  popupOverlay.append(popupWindow);

  const lastWinsModal = document.createElement('div');
  lastWinsModal.classList.add('modal');

  const lastWinsModalContent = document.createElement('div');
  lastWinsModalContent.classList.add('modal-content');

  const lastWinsModalClose = document.createElement('span');
  lastWinsModalClose.innerHTML = '&times;';
  lastWinsModalClose.classList.add('modal-close');

  const lastWinsModalHeading = document.createElement('h4');
  lastWinsModalHeading.textContent = 'High Scores:';
  lastWinsModalHeading.classList.add('modal-heading');

  const lastWinsModalList = document.createElement('ol');
  lastWinsModalList.classList.add('modal-list');

  lastWinsModal.appendChild(lastWinsModalContent);
  lastWinsModalContent.append(lastWinsModalClose, lastWinsModalHeading, lastWinsModalList);

  nonogram.append(levels, gameTimer, gameMain, popupOverlay, lastWinsModal);

  main.append(header, soundSection, nonogram);

  return {
    main,
    header,
    soundButton,
    burgerButton,
    burgerMenu,
    burgerMenuContent,
    levels,
    easyButton,
    mediumButton,
    hardButton,
    randomButton,
    gameTimer,
    patternSelector,
    topClues,
    leftClues,
    gameField,
    checkbox,
    resetButton,
    saveButton,
    continueButton,
    solutionButton,
    lastWinsButton,
    popupOverlay,
    popupClose,
    popupMessage,
    lastWinsModal,
    lastWinsModalClose,
    lastWinsModalList,
  };
}

export default createLayout;
