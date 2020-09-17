import {writable} from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: 'Premier League champion 20/21?',
        answerA: 'Liverpool',
        answerB: 'Man City',
        votesA: 10,
        votesB: 8,
    },
]);

export default PollStore;