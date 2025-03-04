<header>
    <slot/>
</header>
<style>
    header {
    height: 5%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: calc(0.08 * 100vh);
}
</style>