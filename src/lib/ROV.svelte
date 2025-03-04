<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
    import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
    import Head_3 from '$lib/Head_3.svelte';
    import NavButt from "./NavButt.svelte";
    let container; // Reference to the div where Three.js will render

    onMount(() => {
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#2E2E2E");; // Deep navy blue


        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 5, 20);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 5;
        controls.maxDistance = 50;
        controls.minAzimuthAngle = -Infinity;
        controls.maxAzimuthAngle = Infinity;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI;
        controls.target.set(0, 0, 0);
        controls.update();

        // Lighting

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const spotLights = [
            { position: [0, 5, 11], intensity: 100, distance: 20 },
            { position: [0, 8, -1], intensity: 300, distance: 10 },
            { position: [9, 6, 0], intensity: 300, distance: 30 },
            { position: [-9, 6, 0], intensity: 300, distance: 30 },
            { position: [0, 0, -5], intensity: 100, distance: 20 }
        ];

        spotLights.forEach((light) => {
            const spotLight = new THREE.SpotLight(0xffe0b3, light.intensity, light.distance, Math.PI / 3, 1);
            spotLight.position.set(...light.position);
            spotLight.castShadow = true;
            spotLight.shadow.bias = -0.0001;
            scene.add(spotLight);
        });

        // Model Group (To Rotate Only the Model)
        const modelGroup = new THREE.Group();
        scene.add(modelGroup);

        // Ground Plane
        /* const groundGeometry = new THREE.PlaneGeometry(50, 50);
        const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 }); // Transparent shadow receiver
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.rotation.x = -Math.PI / 2; // Make it horizontal
        groundMesh.position.y = -0.5; // Move it slightly under the model
        groundMesh.receiveShadow = true; // Enable shadow reception
        scene.add(groundMesh); */

        // Load Model
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.setPath("rovFinal/");

        loader.load("scene.gltf", (gltf) => {
            let model = gltf.scene;

            // Center model at origin
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            model.position.set(-4, 0, 4);

            model.scale.set(22, 22, 22);
            model.rotation.y = THREE.MathUtils.degToRad(90);

            modelGroup.add(model);
        });

        // Resize Handling
        window.addEventListener("resize", () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    });
</script>

<!-- Container for the 3D Model -->
<Head_3>
    <div class="logo">
        <img src="overflow_logo-removebg-preview.png" alt="OverFlow-Logo">
    </div>
    <h1 class="centerH">Poseidon X</h1>
    <div class="nav-holder">
        <NavButt value="Main" nav=""></NavButt>
    </div>
    
</Head_3>
<div class="model-container" bind:this={container}></div>

<style>
    .model-container {
        width: 100%;  /* Change this to fit your layout */
        height: calc(100vh - (0.08 * 100vh) - 1px); /* Adjust height as needed */
        border: 1px solid var(--dark-red); /* Optional border */
        margin: 0 auto; /* Center on the page */
        background-color: #001F3F; /* Same as scene background */
    }
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
  .nav-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
</style>
