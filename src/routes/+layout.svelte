<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Head_3 from '$lib/Head_3.svelte';
    import CamCol from '$lib/CamCol.svelte';
    import VidMini from '$lib/VidMini.svelte';
    import VidMain from '$lib/VidMain.svelte';
    let loading = true;
  
    onMount(() => {
      if (browser) {
        setTimeout(() => loading = false, 1000); // Simulate loading
      }
    });
  </script>
  
  {#if loading}
    <!-- Loading Screen -->
     <Head_3></Head_3>
     <div id="cam-section">
        <CamCol>
          <div class="vid-mini"></div>
          <div class="vid-mini"></div>
          <div class="vid-mini"></div>
        </CamCol>
        <div id="main-sec">
            <div class="first" >
            </div>
            <div class="second" style="text-align: right;">
            </div>
            <div class="second" style="text-align: left;" >
            </div>
        </div>
        <CamCol>
          <div class="vid-mini"></div>
          <div class="vid-mini"></div>
          <div class="vid-mini"></div>
        </CamCol>
    </div>
    <footer>
    </footer>
  {:else}
    <!-- Main Page Content -->
    <slot />
  {/if}
  
  <style>
    .vid-mini {
        height: 100px;
        width: 150px;
        border: 3px solid var(--dark-red);
        border-radius: 3px;
        position: relative;
        background-color: gray;
    }
    div {
        height: 100%;
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
    #cam-section {
        background-color: #141414;
        display: grid;
        grid-template-columns: 200px 1fr 200px;
        grid-template-rows: calc(0.7 * 100vh);
        border: 1px solid var(--dark-red);
        position: relative;
    }
    footer {
        width: 100%;
        height: calc(0.22 * 100vh - 3px);
        background-color: #242424;
        width: 100%;
        display: block;
        border: 1px solid red;
    }
  </style>
  