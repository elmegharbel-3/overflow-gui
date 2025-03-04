<script>
    export let source = "";
    export let loc = "hello";
    import { createEventDispatcher } from "svelte";
    let img ;
    let message ;
    function handleError() {
        img.style.display = "block"
        message.style.display = "block"
        console.log("source not valid")
    }
</script>
<div class="vid-mini" tag={loc}>
    <img  src={source} alt="video-stream" bind:this={img} on:error={handleError}>
    <p bind:this={message} style="display: none;">stream not available</p>
</div>
<style>
    .vid-mini {
        width: 100%;
        height: 100%;
        border: 3px solid var(--dark-red);
        border-radius: 3px;
        position: relative;
    }
    .vid-mini img {
        width: 100%;
        height: 100%;
    }
    .vid-mini p {
        color: white;
        background-color: black;
    }  
    .vid-mini::before {
        content: attr(tag);
        position: absolute;
        font-size: 16px;
        color: antiquewhite;
        background-color: rgba(62, 58, 58, 0.311);
        left: 50%;
        transform: translateX(-50%);
        top: 10px;
        padding: 5px;
        border-radius: 5px;
    }
</style>