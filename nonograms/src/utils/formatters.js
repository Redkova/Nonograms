export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
