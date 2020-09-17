import {writable} from "svelte/store";
const PollStore = writable([
    {
        id: 1,
        question: 'Python or JS?',
        answerA: 'Python',
        answerB: 'JS',
        votesA: 10,
        votesB: 15,
    },
]);

export default PollStore;