<script>
    // Define your checklist items here
    const items = [
      { id: 1, label: "shipwrecks" },
      { id: 2, label: "photosphere" },
      { id: 3, label: "Spotter Buoys" },
      { id: 4, label: "Water Sample" },
      { id: 5, label: "solar panel" },
      { id: 6, label: "wind farm" },
      { id: 7, label: "jelly fish" },
      { id: 8, label: "medusa" },
      { id: 9, label: "hydrophone" },
      { id: 10, label: "float" },
    ];
  
    // Initialize the state from localStorage
    let checkedState = {};
  
    // Load saved state from localStorage
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("checklistState");
      if (savedState) {
        checkedState = JSON.parse(savedState);
      }
    }
  
    // Function to handle checkbox changes
    function handleCheckboxChange(event, id) {
      checkedState[id] = event.target.checked;
      if (typeof window !== "undefined") {
        localStorage.setItem("checklistState", JSON.stringify(checkedState));
      }
    }
  </script>
  
  <style>
    .checklist {
      display: flex;
      flex-direction: row;
      gap: 5px;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: center;
      border: 1px solid var(--dark-red);
      border-left: none;
      background-color: #242424;
    }
    .checklist-item {
      display: flex;
      align-items: center;
      gap: 2px;
      width: calc(100% / 2 - 5px);
      font-size: 14px;
      font-family: 'protest';
      color: var(--dark-red) !important;
      text-transform: capitalize;
    }
    .checklist input {
    display: none;
  }
  .item {
    transition: 0.4s;
  }
  .checklist-item:hover .item {
    color: white;
  }
  .number {
    color: rgba(255, 255, 255, 0.452);
  }
  .checklist .checkmark {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #afa7a7;
    border: 1px solid black;
    border-radius: 2px;
    position: relative;
    margin-left: 8px;
    cursor: pointer;
    box-shadow: black 0px 3px 3px;
  }

  .checklist input:checked + .checkmark {
    background-color: var(--dark-red);
    border-color: white;
  }

  .checklist .checkmark::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 2px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .checklist input:checked + .checkmark::after {
    display: block;
  }
  .checklist:hover .checkmark {
    background-color: white;
  }
  </style>
  
  <div class="checklist">
    {#each items as item}
      <label class="checklist-item">
        <span class="number">{item.id}-</span>
        <span class="item">{item.label}</span> 
        <input
          type="checkbox"
          checked={checkedState[item.id] || false}
          on:change={(e) => handleCheckboxChange(e, item.id)}
        />
        <span class="checkmark"></span>
      </label>
    {/each}
  </div>
  