<script>
    export let value;
    export let nav;
</script>
  <a href="/{nav}" data-sveltekit-preload-data="off">{value} </a>
<style>
a {
    display: block;
    color: var(--dark-red);
    padding: 8px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #D9D9D9;
    font-family: 'protest';
    font-weight: bold;
    border-radius: 3px;
    box-shadow: black 0px 4px 4px;
    transition: 0.3s;
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