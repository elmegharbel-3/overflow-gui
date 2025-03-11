<script>
    let direction = "forward"
    let speed = 80
    let lights = true
    let pid = false
    let grippers = [
        {index:1,status:true},
        {index:2,status:false},
        {index:3,status:false},
        {index:4,status:true}
    ]
</script>
<div class="mouvement ">
    <div class="direction top">
        {direction}
    </div>
    <div class="speed top">
        Speed  
        <span>{speed}</span>
    </div>
    <div class="lights bottom">
        <h3>lights</h3>
        {#if lights == true}
        <p>On</p>
        {:else}
        <p>Off</p>
        {/if}
        </div>
    <div class="grippers bottom">
        <h3>Grippers</h3>
        <ul>
            {#each grippers as gripper}
                {#if gripper.status == true}
                    <div>{gripper.index}: on</div>
                {:else}
                    <div>{gripper.index}: off</div>
                {/if}
            {/each}
        </ul>
        </div>
    <div class="pid bottom">
        <h3>PID</h3>
        {#if pid == true}
        <p>On</p>
        {:else}
        <p>Off</p>
        {/if}
        </div>
</div>
<style>
    h3 {
        margin: 0;
        margin-top: 10px;
        color: var(--dark-red);
    }
    .mouvement {
        border: 1px solid var(--dark-red);
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        color: var(--dark-red);
        font-family: "protest";
        gap: 5px;
        justify-content: center;
        padding: 20px;
        background-color: #242424;
        border-right: none;
        border-left:none;
    }
    .mouvement > div {
        border: 1px solid #ffffff;
        border-radius: 3px;
    }
    .top {
        width: calc(100% / 2 - 5px);
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        padding: 5px;
    }
    .bottom {
        width: calc(100% / 3 - 5px);
        text-align: center;
    }
    .grippers ul {
        display: flex; 
        flex-wrap: wrap; 
        justify-content: center;
        padding: 0;
        color: white;
    }
    .grippers ul div  {
        min-width: calc(50%);
    }
    .lights {
        color: white;
    }
    .pid {
        color: white;
    }
    .speed span {
        color: white;
    }
</style>