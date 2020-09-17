<script>
    import PollStore from '../stores/PollStore';
    import {createEventDispatcher} from 'svelte';
    import Button from "../shared/Button.svelte";

    const dispatch = createEventDispatcher();

    let fields = {
        question: '',
        answerA: '',
        answerB: ''
    };
    let errors = {
        question: '',
        answerA: '',
        answerB: ''
    };

    let valid = false;

    const submitHandler = () => {
        valid = true;

        //validate question
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least 5 characters long!';
        } else {
            errors.question = '';
        }

        //validate answer A
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        } else {
            errors.answerA = '';
        }

        //validate answer B
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = 'Answer A cannot be empty';
        } else {
            errors.answerB = '';
        }

        //add new poll
        if (valid) {
            let poll = {
                ...fields,
                votesA: 0,
                votesB: 0,
                id: Math.random()
            };
            // save poll to store
            PollStore.update(currentPolls => {
                return [poll, ...currentPolls] //return a value that is contained within the store
            })
            dispatch('add');
        }
    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input bind:value={fields.question} id="question" type="text">
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input bind:value={fields.answerA} id="answer-a" type="text">
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input bind:value={fields.answerB} id="answer-b" type="text">
        <div class="error">{errors.answerB}</div>
    </div>
    <Button flat={true} inverse={false} type="secondary">Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 1em auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 5px auto;
        text-align: left;
    }

    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>