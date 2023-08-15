async function addJoke(question, answer, rating) {
    try {
        const response = await fetch('/japi/jokes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ question, answer, rating })
        });

        console.log(response);

        if (response.ok) {
            alert('Joke is added successfully...');
        }
        else {
            alert('Failed to add joke...');
        }
    }
    catch (err) {
        console.log(err);
    }
}

document.getElementById('addJokeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    const rating = document.getElementById('rating').value;

    await addJoke(question, answer, rating);
});