export default function createBurgerMenu({ burgerButton, burgerMenu, burgerMenuContent }) {
  for (let i = 0; i < 3; i++) {
    const burgerLine = document.createElement('span');
    burgerLine.classList.add('burger-line');
    burgerButton.appendChild(burgerLine);
  }

  function closeMenu() {
    burgerMenu.classList.remove('active');
    burgerButton.classList.remove('active');
    burgerMenuContent.classList.remove('active');
  }

  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    burgerButton.classList.toggle('active');
    burgerMenuContent.classList.toggle('active');
  }

  const gameControlButtons = document.querySelectorAll('.game-control-button');

  gameControlButtons.forEach((gameControlButton) => {
    const clonedGameControlButton = gameControlButton.cloneNode(true);

    gameControlButton.addEventListener('click', closeMenu);

    clonedGameControlButton.addEventListener('click', () => {
      gameControlButton.click();
      closeMenu();
    });

    burgerMenuContent.appendChild(clonedGameControlButton);
  });

  burgerButton.addEventListener('click', toggleMenu);
}
