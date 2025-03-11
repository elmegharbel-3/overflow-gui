<script>
    import "../app.css"
    import Logo from '../../static/overflow_logo-removebg-preview.png'
    import Head_3 from '$lib/Head_3.svelte';
    import Nav from '$lib/Nav.svelte'
    import NavButt from '$lib/NavButt.svelte';
    import VidCol from '$lib/CamCol.svelte';
    import VidMini from '$lib/VidMini.svelte';
    import VidSec from '$lib/VidSec.svelte'
    import Timer from '$lib/Timer.svelte'
    import Check from "$lib/Check.svelte";
    import Mouvement from "$lib/Mouvement.svelte";
    import Sensor from "$lib/Sensor.svelte";
  </script>
  <Head_3>
    <div class="logo">
      <img src="overflow_logo-removebg-preview.png" alt="OverFlow-Logo">
    </div>
    <h1 class="centerH">Poseidon X</h1>
    <Nav>
      <NavButt value="Cameras" nav="Stream"/>
      <NavButt value="Capture" nav="Capture"/>
      <NavButt value="ROV" nav="ROV"/>
      <NavButt value="Mouvement" nav="Mouvement"/>
      <NavButt value="Sensors" nav="Sensors"/>
    </Nav>
  </Head_3>
  <VidSec></VidSec>
  <footer>
    <Timer></Timer>
    <Mouvement></Mouvement>
    <div class="sensors">
      <Sensor sensor = "Depth" max=5.5 value=3></Sensor>
    </div>
    <Check></Check>
  </footer>
  <style>
    .logo img {
      max-height: calc(0.08 * 100vh);
      margin-left: 100px;
    }
    .centerH {
    text-align: center;
    color: var(--dark-red);
    font-family: 'protest','sans-serif';
    letter-spacing: 3px;
    text-shadow: white 0px -2px 1px;
    margin: 0;
    line-height: calc(0.08 * 100vh);
    font-size: 36px;
    transition: 0.3s;
  }
    .centerH:hover {
      text-shadow: var(--dark-red) 0px -2px 3px;
      color: whitesmoke;
      cursor: default;
  }
  .sensors {
    padding: 10px;
    background-color: #242424;
    border: 1px solid var(--dark-red);
    padding-top: 20px;
    border-right: none;
    border-left: none;
  }
  footer {
    display: grid;
    grid-template-columns: 200px repeat(2,1fr) 300px;
    grid-template-rows: calc(0.22 * 100vh - 3px);
  }
  </style>