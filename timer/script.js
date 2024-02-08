const root = document.getElementById('root');
const time = document.querySelector('.time');
const startButton = document.querySelector('.button-start');
const pauseButton = document.querySelector('.button-pause');


// event listeners
startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)


// global variables
let timerId;
let count = 0;


// functions 
function startTimer() {
    timerId = setInterval(() => {
        count++;
        time.innerText = `${count.toString().padStart(2, '0')} sec.`;
    }, 1000)
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timerId);
    startButton.disabled = false;
}
