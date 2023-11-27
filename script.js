var userScore = 0;
var computerScore = 0;

function generateNumbers() {
    var userName = document.getElementById('userName').value;
    if (!userName) {
        alert('Будь ласка, введіть ім\'я гравця.');
        return;
    }

    var userNumber = Math.floor(Math.random() * 10) + 1;
    var computerNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById('userLabel').innerText = userName;
    document.getElementById('userNumber').innerText = 'Ваше число: ' + userNumber;
    document.getElementById('computerNumber').innerText = 'Число комп\'ютера: ' + computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
    } else if (userNumber < computerNumber) {
        computerScore++;
    }

    updateScores();

    if (userScore === 3 || computerScore === 3) {
        endGame();
    }
}

function updateScores() {
    document.getElementById('userScore').innerText = 'Рахунок гравця: ' + userScore;
    document.getElementById('computerScore').innerText = 'Рахунок комп\'ютера: ' + computerScore;
}

function endGame() {
    var result = document.getElementById('result');
    if (userScore > computerScore) {
        result.innerText = 'Гравець переміг гру!';
    } else {
        result.innerText = 'Комп\'ютер переміг гру!';
    }
}
