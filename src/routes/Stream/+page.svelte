<script>
    import "../../app.css";
    import VidOne from '$lib/VidOne.svelte';
    import NavButt from "$lib/NavButt.svelte";
    let pool1 = "pool1.webp";
    let pool2 = "pool2.jpg";
    let pool3 = "pool3.jpg";
    let pool4 = "pool4.jpg";
    let links = [
        {id: "1",source: pool1,loc:"front"},
        {id: "2",source: pool3,loc:"back"},
        {id: "3",source: pool2,loc:"upper"},
        {id: "4",source: pool4,loc:"lower"},
        {id: "5",source: pool1,loc:"grippers"},
        {id: "6",source: pool3,loc:"fin"},
        {id: "7",source: pool1,loc:"stereo"}
    ];
</script>
<div id="section">
    <a href="/">Main</a>
    <div>
        <VidOne source={links[0].source} loc={links[0].loc}></VidOne>
    </div>
    <div>
        <VidOne source={links[1].source} loc={links[1].loc}></VidOne>
    </div>
    <div>
        <VidOne source={links[2].source} loc={links[2].loc}></VidOne>
    </div>
    <div>
        <VidOne source={links[3].source} loc={links[3].loc}></VidOne>
    </div>
    <div>
        <VidOne source={links[4].source} loc={links[4].loc}></VidOne>
    </div>
    <div>
       <VidOne source={links[5].source} loc={links[5].loc}></VidOne> 
    </div>
    <div>
        <VidOne source={links[6].source} loc={links[6].loc}></VidOne>
    </div>
</div>
<style>
    #section {
        /* display: grid;
        grid-template-columns: auto auto auto auto ;
        grid-template-rows: repeat(2,calc(50vh - 1px)); */
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
    }
    #section div {
        width: calc(100% / 4);
        height: calc(100vh / 2 - 2px);
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
    left: 20px;
    bottom: 20px;
}
a:hover {
    color: #D9D9D9;
    background-color: var(--dark-red);
    border: #D9D9D9 1px solid;
    cursor: pointer;
    padding: 12px;
}
</style>