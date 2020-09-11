<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()


    //we need to export variables which we are accepted as property
    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 2em;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 1em;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }

    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>