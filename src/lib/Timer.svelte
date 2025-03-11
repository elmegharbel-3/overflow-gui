<script>
  let timeLeft = 15 * 60; // 15 minutes in seconds
  let interval;
  let isRunning = false;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      interval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
        } else {
          clearInterval(interval);
          isRunning = false;
        }
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(interval);
    isRunning = false;
  }

  function resetTimer() {
    stopTimer();
    timeLeft = 15 * 60;
  }
</script>

<div class="timer">
  <h2>{formatTime(timeLeft)}</h2>
  <div>
    <button id="start" on:click={startTimer} disabled={isRunning}>Start</button>
    <button id="stop-timer" on:click={stopTimer} disabled={!isRunning}>Stop</button>
  </div>
  <button id="reset" on:click={resetTimer}>Reset</button>
</div>

<style>
  .timer {
    background-color: #242424;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    font-weight: bold;
    padding: 5px;
    text-align: center;
    border: 1px solid var(--dark-red);
    border-right: none;
  }
  .timer h2 {
    color: var(--dark-red);
    font-family: "protest";
    margin: 0;
    text-shadow: white 0px -2px 1px;
  }
  button {
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    margin: 5px;
    border: none;
    border-radius: 3px;
    box-shadow: black 0px 4px 4px;
  }
  button:disabled {
    cursor: not-allowed;
  }
  .timer div {
    display: flex;
  }
  #start {
    background-color: rgb(14, 91, 30);
  }
  #stop-timer {
    background-color: var(--dark-red);
  }
  #reset {
    background-color: rgb(1, 53, 99);
  }
</style>

