<script>
    import "../../app.css"
    import "./capture.css"
    import { onMount } from 'svelte';
    

    let capture_multiple, stop_capture, capture_one, stream;

    onMount(() => {
        capture_multiple = document.getElementById('capture');
        stop_capture = document.getElementById('stop');
        capture_one = document.getElementById('one');
        stream = document.getElementById('stream');
    });
        /* handle if the streaming link doesnot work */
        let stream_state
        function handleError() {
            stream.src = "warning.png"
            stream_state = false
            console.log(stream_state)
        };
        let img_counter = 0
        function captureFrame() {
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            console.log(stream.width)
            canvas.width = stream.width;
            canvas.height = stream.height;
            // copy the frame to the canvas
            context.drawImage(stream, 0, 0, canvas.width, canvas.height);
            // image to url link
            const imageDataURL = canvas.toDataURL("image/png");
            let image = document.getElementById('capturedImage');
            // set the source of image as the canva copied from the frame
            image.src = imageDataURL;
            // create a pseudo link that downloads the image automaticaly
            const link = document.createElement('a');
            link.href = image.src
            // i've made the naming process of the frame like this 001,002 (counter)
            link.download = `frame_${img_counter.toString().padStart(3,"0")}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            img_counter += 1;
            
        }
        
        let capture_frames;
        function Multiple_func() {
            capture_one.style.display = 'none'
            stop_capture.style.display = 'block'
            capture_frames = setInterval(captureFrame,1000)
            capture_multiple.classList.add("capture_clicked")
            console.log(capture_frames)
        }
        function Stop_func() {
            capture_one.style.display = 'block'
            stop_capture.style.display = 'none'
            console.log("stopped")
            console.log(capture_frames)
            clearInterval(capture_frames)
            capture_frames = null
            capture_multiple.classList.remove("capture_clicked")
        }
        function One_func() {
            console.log("one frame captured")
            captureFrame()
        }
        document.body.addEventListener('keydown', (m) => {
            if (m.key == 'Enter') {
                console.log("capture frames clicked")
                capture_multiple.classList.add("capture_clicked")
                capture_multiple.click();
                /* setTimeout(() => capture_multiple.classList.remove("capture_clicked"),500)  */
            }
            else if (m.key == 's' && window.getComputedStyle(stop_capture).getPropertyValue("display") == 'block') {
                console.log("stop clicked")
                stop_capture.classList.add("stop_clicked")
                stop_capture.click();
                setTimeout(() => stop_capture.classList.remove("stop_clicked"),500)
            }
            else if (m.key == '1' && window.getComputedStyle(capture_one).getPropertyValue("display") == 'block') {
                console.log("capture one clicked")
                capture_one.classList.add("one_clicked")
                capture_one.click()
                setTimeout(() => capture_one.classList.remove("one_clicked"),500)
            }
        })
</script>

<div class="header">
    <img src="overflow_logo-removebg-preview.png" alt=""> 
    <h1>Photosphere</h1>
    <p>OverFlow Robotics</p>
</div>

<div class="container">
    <a href="/">Main</a>
    <!-- put the source here when actually working -->
     <!-- http://192.168.137.47:8085/?action=stream -->
    <div class="stream">
        <img id="stream" src="pool2.jpg" alt="main" on:error={handleError}>
    </div>
    <div class="capture">
        <canvas id="canvas" userCORS="true" allowTaint="true" style="display: none;"></canvas>
        <img id="capturedImage" alt="Captured Frame" src="ahmedamr.jpeg">
        <button type="button" id="capture" on:click={Multiple_func}>Capture Frames</button>
        <button id="stop" type="button" on:click={Stop_func}>Stop</button>
        <button id="one" type="button" on:click={One_func}>Get one frame</button>
    </div>
</div>

<style>
    .container {
        position: relative;
    }
    a {
    display: block;
    color: var(--dark-red);
    padding: 8px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #D9D9D9;
    font-family: 'protest';
    font-weight: bold;
    border-radius: 3px;
    box-shadow: black 0px 4px 4px;
    transition: 0.3s;
    position: absolute;
    z-index: 1;
    left: 25px;
    bottom: 25px;
    width: fit-content;
}
a:hover {
    color: #D9D9D9;
    background-color: var(--dark-red);
    border: #D9D9D9 1px solid;
    cursor: pointer;
    padding: 12px;
}
</style>