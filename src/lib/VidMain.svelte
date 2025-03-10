<script>
    export let level;
    export let source;
    let img;
    let message;
    function handleError() {
        console.log("no stream added yet")
        img.style.display = "none"
        message.style.display = "block"
        console.log("source not valid")
    }
    function onLoad() {
        console.log("stream is added")
        img.style.display = "block"
        message.style.display = "none"
    }
</script>
    <div class="{level}">
        <img src={source} class={level} alt="main stream" bind:this={img} on:error={handleError} on:load={onLoad}>
        <p style="display: none;" bind:this={message}>Click on Stream to add here</p>
    </div>
<style>
    div {
        height: 100%;
        position: relative;
    }
    .one img {
        margin: 0 auto;
    }
    .two img {
        margin-left: auto;
    }
    .three img{
        margin-right: auto;
    }
    img {
        border: var(--dark-red) 3px solid;
        height: 100%;
    }
    p {
        background-color: rgb(49, 45, 45);
        width: fit-content;
        margin: 0 auto;
        padding: 10px;
        border-radius: 3px;
        position: absolute;
        width: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>