const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);// O Math.random vai gerar um valor aleatorio conforme for passado, nesse caso, x10.
        // Porem ele vem com casas decimais. Por isso usamos o Math.round para arredondar conforme estiver definido.
    }
};

let numberDrawn = Guess.numberDrawn();

// Const -> É um qualificador de variáveis que modifica o comportamento da variável, 
// fazendo com que a variável seja de "apenas-leitura"

// Let -> As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value;
}

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite agum valor!');
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();

    } else if(numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();

    }else if(numberDrawn < kick) {
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    }
}

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
}