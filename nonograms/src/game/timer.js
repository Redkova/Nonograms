function createTimer(timerElement) {
  let timer = null;
  let timeCounter = 0;

  function updateTimerDisplay() {
    const minutes = Math.floor(timeCounter / 60);
    const seconds = timeCounter % 60;

    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    if (timer) return;

    timer = setInterval(() => {
      timeCounter++;
      updateTimerDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    timeCounter = 0;
    updateTimerDisplay();
  }

  function setTime(time) {
    timeCounter = time;
    updateTimerDisplay();
  }

  function getTime() {
    return timeCounter;
  }

  return {
    startTimer,
    stopTimer,
    resetTimer,
    updateTimerDisplay,
    setTime,
    getTime,
  };
}

export default createTimer;
