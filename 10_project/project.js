let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = parseInt(document.getElementById('guessInput').value, 10);
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;
    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = '📉 Too low! Try again.';
    } else {
        message.textContent = '📈 Too high! Try again.';
    }
});

function endGame() {
    document.getElementById('submitGuess').disabled = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('restartGame').classList.remove('hidden');
}

document.getElementById('restartGame').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('restartGame').classList.add('hidden');
});
