export default function createSound(soundButton) {
  let soundEnabled = true;

  soundButton.addEventListener('click', () => {
    soundEnabled = !soundEnabled;

    soundButton.classList.toggle('sound-on', soundEnabled);
    soundButton.classList.toggle('sound-off', !soundEnabled);
  });

  function playSound(src) {
    if (!soundEnabled) {
      return;
    }

    const audio = new Audio(src);
    audio.play();
  }

  return playSound;
}
