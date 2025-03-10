<script>
    export let source = "";
    import { createEventDispatcher } from "svelte";
    let img ;
    let message ;
    let list;
    function handleError() {
        img.style.display = "none"
        message.style.display = "block"
        list.classList.remove("options");
        console.log("source not valid")
    }
    const dispatch = createEventDispatcher();
    function selectStream(level) {
    dispatch("streamSelected", { source, level });
    }
</script>
<div class="vid-mini" >
    <img  src={source} alt="video-stream" bind:this={img} on:error={handleError}>
    <ul style="display: none;" class="options" bind:this={list}>
        <li><button on:click={() => selectStream(1)}>1</button></li>
        <li><button on:click={() => selectStream(2)}>2</button></li>
        <li><button on:click={() => selectStream(3)}>3</button></li>
    </ul>
    <p bind:this={message} style="display: none;">stream not available</p>
</div>
<style>
    .vid-mini {
        height: 100px;
        width: 150px;
        border: 3px solid var(--dark-red);
        border-radius: 3px;
        position: relative;
    }
    .vid-mini img {
        width: 100%;
        height: 100%;
    }
    .vid-mini p {
        color: var(--dark-red);
        background-color: #242424;
        /* padding: 5px; */
        margin: 0;
        font-weight: bold;
        /* padding: 5px; */
        height: 100%;
        line-height: 95px;
        font-family: cursive;
        font-size: 14px;
        text-align: center;
    }
    .vid-mini ul {
        position: absolute;
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 5px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;   
        transition: 1s;
    }
    .vid-mini:hover .options {
        display: flex !important;
    }
    .vid-mini ul li {
        background-color: #b8272c5e;
        padding: 4px;
        border-radius: 4px;
        text-align: center;
        width: 100%;
        transition: 0.6s;
        font-size: 22px;
    }
    .vid-mini ul li button {
        background: transparent;
        border: none;
        font-size: 20px;    
    }
    .vid-mini ul li:hover {
        background-color: var(--dark-red);
        padding: 10px;
    }

    
</style>