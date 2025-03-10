<script>
    import CamCol from "$lib/CamCol.svelte"
    import VidMini from "$lib/VidMini.svelte"
    import VidMain from "$lib/VidMain.svelte"
    import { onMount } from 'svelte';
    export let state = "integrated";
    let img;
    let message;
    let section;
    let Logo = "overflow_logo-removebg-preview.png"
    let back = "overflow_logo-removebg-preview.png"
    let pool1 = "pool1.webp";
    let pool2 = "pool2.jpg";
    let pool3 = "pool3.jpg";
    let pool4 = "pool4.jpg";
    let mainStreams = {
    1: "none",
    2: "none",
    3: "none"
  };
  console.log(mainStreams)
  console.log(mainStreams[0])
    let links = [
        {id: "1",source: pool1},
        {id: "2",source: pool3},
        {id: "3",source: pool2},
        {id: "4",source: pool4},
        {id: "5",source: pool1},
        {id: "6",source: pool3},
    ]
    function updateMain(event) {
    let { source, level } = event.detail;
    console.log(source,level)
    console.log(event)
    if (mainStreams[level]) {
    mainStreams[level] = source;
  } else {
    console.error(`Level ${level} is not valid`, event.detail);
  }
}
onMount(() => {
    if (state === "main") {
    console.log("true")
    if (section) {
        console.log("truuuuuue")
        section.style.gridTemplateRows = "calc(100vh - 3px)"
    }
}
  });

</script>
<div id="cam-section" bind:this={section}>
    <CamCol>
      <VidMini source={links[0].source}  on:streamSelected={updateMain} id="exc" />
      <VidMini source={links[2].source}  on:streamSelected={updateMain}/>
      <VidMini source={links[1].source}  on:streamSelected={updateMain}/>
    </CamCol>
    <div id="main-sec">
        <div class="first" >
            <VidMain source={mainStreams[1]} level="one"></VidMain>
        </div>
        <div class="second" style="text-align: right;">
            <VidMain source={mainStreams[2]} level="two"></VidMain>
        </div>
        <div class="second" style="text-align: left;" >
            <VidMain source={mainStreams[3]} level="three"></VidMain>
        </div>
    </div>
    <CamCol>
      <VidMini source={links[3].source}  on:streamSelected={updateMain} bind:this={message}/>
      <VidMini source={links[4].source}  on:streamSelected={updateMain}/>
      <VidMini source={links[5].source}  on:streamSelected={updateMain}/>
    </CamCol>
</div>
<style>
    #cam-section {
        background-image: url("44_2.jpg");
        background-size: cover;
        display: grid;
        grid-template-columns: 200px 1fr 200px;
        grid-template-rows: calc(0.7 * 100vh);
        border: 1px solid var(--dark-red);
        position: relative;
    }
    #cam-section::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0,0.60);
        z-index: 0;
    }
    #main-sec {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 10px;
        justify-content:center;
        position: relative;
    }
    .first {
        width: 100%;
        height: calc(66% - 10px);
        text-align: center;
    }
    .second {
        width: calc(50% - 10px);
        height: 34%;
    }
</style>