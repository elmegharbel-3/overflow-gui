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
    function getBack() {
        console.log("stream is added")
        img.style.display = "block"
        message.style.display = "none"
    }
</script>
    <img src={source} class={level} alt="main stream" bind:this={img} on:error={handleError} on:load{}>
    <p style="display: none;" bind:this={message}>Click on Stream to add here</p>
<style>
    .one,
    .two,
    .three {
        height: 100%;
        border: var(--dark-red) 3px solid;
    }
    .two {
        margin-left: auto;
    }
    .three{
        margin-right: auto;
    }
    p {
        background-color: rgb(49, 45, 45);
        width: fit-content;
        margin: 0 auto;
        padding: 10px;
        border-radius: 3px;
    }
</style>