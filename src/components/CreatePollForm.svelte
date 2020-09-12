<script>
    let fields = {
        question: '',
        answerA: '',
        answerB: ''
    }

    const submitHandler = () => console.log(fields);

</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input bind:value={fields.question} id="question" type="text">
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input bind:value={fields.answerA} id="answer-a" type="text">
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input bind:value={fields.answerB} id="answer-b" type="text">
    </div>
    <button>Add poll</button>
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
</style>