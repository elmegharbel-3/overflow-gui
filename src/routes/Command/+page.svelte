<script>
    import "../../app.css"
    import NavButt from "$lib/NavButt.svelte";
    let command = '';
    let output = '';
    let ws;

    function startWebSocket() {
        if (ws) {
            ws.close();
        }

        ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
            output = 'Connected to server...\n';
            ws.send(command);
        };

        ws.onmessage = (event) => {
            output += event.data + '\n';
        };

        ws.onclose = () => {
            output += '\nConnection closed.';
        };
    }

    function stopCommand() {
        if (ws) {
            ws.close();
        }
    }
</script>
<div class="main">
    <NavButt value="Main" nav=""></NavButt>
    <input bind:value={command} placeholder="Enter command" />
    <button class="run" on:click={startWebSocket}>Run</button>
    <button class="stop" on:click={stopCommand}>Stop</button>
</div>


<pre>
    <h3>output here</h3>
    {output}</pre>
<style>
    .main {
        background-color: #121212;
        display: flex;
        justify-content: center;
        padding: 20px;
        gap: 20px;
    }
    :global(html),:global(body){
        background-color: #121212;
        margin: 0;
    }
    .main input {
        background: white;
        color: black;
    padding: 10px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: "protest";
    }
    .main .run {
        background-color: #3a7d44;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
    }
    .main .stop {
        background-color: #E52020;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
    }
    pre {
        background-color: var(--dark-red);
        text-align: center;
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        border-radius: 5px;
    }
    pre h3 {
        margin: 0;
        text-transform: capitalize;
        color: #121212;
    }
</style>


