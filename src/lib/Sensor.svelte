<script>
    export let sensor;
    export let value = 20; // Current progress value
    export let min = 0;    // Start value
    export let max = 100;  // End value
  
    // Calculate percentage for the progress bar width
    $: percentage = ((value - min) / (max - min)) * 100;
  </script>
  
  <div class="progress-container">
      <h3>{sensor}</h3>
    <span class="label left">{min}m</span>
    <div class="progress-wrapper">
      <div class="progress-bar" style="width: {percentage}%;">
              <div class="progress-text">{value}m</div>
          </div>
    </div>
    <span class="label right">{max}m</span>
  </div>
  
  <style>
    .progress-container {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      flex-wrap:wrap;
    }
    .progress-container h3 {
      width:100%;
      text-align:center;
      margin:0;
      padding-bottom:10px;
      font-family: "protest";
      font-size: 22px;
      margin-bottom:5px;
      }
    .label {
      font-size: 14px;
      font-weight: bold;
      font-family: cursive;
    }
  
    .progress-wrapper {
      flex-grow: 1;
      height: 30px;
      background-color: #ddd;
      border-radius: 15px;
    }
  
    .progress-bar {
      height: 100%;
      background-color: var(--dark-red);
      transition: width 0.3s ease-in-out;
      position: relative;
      border-radius:15px 0 0 15px;
    }
  
    .progress-text {
      position: absolute;
      top: -25px;
      right:-5px;
      font-weight: bold;
      color: var(--dark-red);
      font-family: cursive;
    }
  </style>