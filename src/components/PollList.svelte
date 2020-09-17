<script>
   // import {onMount, onDestroy} from 'svelte';
    import PollStore from '../stores/PollStore'
    import PollDetails from "./PollDetails.svelte";

    /*export let polls = [];

    const unsub = PollStore.subscribe(data => polls = data)

    onDestroy(() => {
        //unsub from store
        console.log('component destroyed');
        unsub();
    })*/
</script>

<!--$PollStore $ assume that we want to get the data from the Store(Array of polls)-->
<!--$PollStore $ automatically subscribe us to that data ,
and also it auto unsub. us from the store when component is destroys(switching between tabs)-->

<div class="poll-list">
    {#each $PollStore as poll (poll.id) }
        <div>
            <!--'vote' - name of event-->
            <!--custom event forwarding to the parent.Handler is not assigned-->
            <PollDetails {poll}/>
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px
    }
</style>