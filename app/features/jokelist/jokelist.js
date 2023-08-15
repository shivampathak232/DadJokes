function displayJokes() {
    console.log('test');
    const jokeListHtml = document.getElementById('jokeList');
    jokeListHtml.innerHTML = '';

    fetch('/japi/jokes')
        .then(req => req.json())
        .then(jokes => {
            console.log(jokes);

            jokes.forEach(joke => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                        <strong>Question:</strong> ${joke.question}<br>
                        <strong>Answer:</strong> ${joke.answer}<br>
                        <strong>Rating:</strong> ${joke.rating}<br>
                        <button class="btn btn-primary" onclick="editJoke(${joke.id})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteJoke(${joke.id})">Delete</button>
                        `;
                jokeListHtml.appendChild(listItem);
            });
        })
        .catch(err => console.log(err));
}

async function editJoke(id) {
    try {
        const newQuestion = prompt("Enter new question:");
        const newAnswer = prompt('Enter new answer:');
        const newRating = prompt('Enter new rating:');

        const joke = {
            question: newQuestion,
            answer: newAnswer,
            rating: newRating
        }
        if (newQuestion && newAnswer && newRating) {
            const response = await fetch(`/japi/jokes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(joke)
            });
            const data = await response.text();
            alert(data);
            displayJokes();
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteJoke(id) {
    try {
        if (confirm('Are you sure you want to delete this joke?')) {
            const response = await fetch(`/japi/jokes/${id}`, {
                method: 'DELETE'
            });
            const data = await response.text();
            alert(data);
            displayJokes();
        }
    }
    catch (err) {
        console.log(err);
    }
}

displayJokes();