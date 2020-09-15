<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Tabs from "./shared/Tabs.svelte";
    import CreatePollForm from "./components/CreatePollForm.svelte";
    import Polllist from "./components/Polllist.svelte";

    //tabs
    let items = ['Current Polls', 'Add New Poll'];
    let activeItem = 'Add New Poll';
    const tabChange = (e) => activeItem = e.detail

    //polls
    let polls = [
        {
            id: 1,
            question: 'Python or JS',
            answerA: 'Python',
            answerB: 'JS',
            voteA: 9,
            voteB: 15,
        },
    ];

    const handleAdd = (e) => {
        const poll = e.detail;
        polls = [poll, ...polls];
        console.log(polls);
        activeItem = 'Current Polls';
    }

</script>


<Header/>
<main>
    <!--variable name is same as a property,
    item={items}-->
    <Tabs {activeItem} {items} on:tabChange={tabChange}/>
    {#if activeItem === 'Current Polls'}
        <Polllist  {polls}/>
    {:else if activeItem === 'Add New Poll'}
        <CreatePollForm on:add={handleAdd}/>
    {/if}
</main>
<Footer/>

<style>
    main {
        max-width: 960px;
        margin: 2em auto;
    }
</style>

