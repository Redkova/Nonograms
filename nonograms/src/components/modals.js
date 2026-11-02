import { capitalize, formatTime } from '../utils/formatters';

export default function createModals({
  main,
  popupOverlay,
  popupMessage,
  popupClose,
  lastWinsModal,
  lastWinsModalList,
  lastWinsModalClose,
}) {
  function showPopupMessage(message, onShow) {
    popupOverlay.style.display = 'flex';
    popupMessage.textContent = message;
    main.classList.add('inactive');

    if (onShow) {
      onShow();
    }
  }

  function closePopup() {
    popupOverlay.style.display = 'none';
    main.classList.remove('inactive');
  }

  function showLastWinsModal(lastWins) {
    lastWinsModal.style.display = 'flex';
    lastWinsModalList.innerHTML = '';

    const sortedWins = [...lastWins].sort((a, b) => a.time - b.time);

    sortedWins.forEach(({ patternName, difficulty, time }) => {
      const li = document.createElement('li');

      const name = document.createElement('span');
      name.textContent = `✎ ${capitalize(patternName)}`;

      const level = document.createElement('span');
      level.textContent = capitalize(difficulty);

      const resultTime = document.createElement('span');
      resultTime.textContent = formatTime(time);

      li.append(name, level, resultTime);
      lastWinsModalList.appendChild(li);
    });
  }

  function closeLastWinsModal() {
    lastWinsModal.style.display = 'none';
  }
  popupClose.addEventListener('click', closePopup);
  lastWinsModalClose.addEventListener('click', closeLastWinsModal);

  return {
    showPopupMessage,
    showLastWinsModal,
  };
}
