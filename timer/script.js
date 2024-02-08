const root = document.getElementById('root');
const time = document.querySelector('.time');
const startButton = document.querySelector('.button-start');
const pauseButton = document.querySelector('.button-pause');



// event listeners
startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)


//functions

function startTimer() { 
    time.innerText = '00 sec.';
    let test = 0;
    setInterval(() => {
    test++;
    time.innerText = `${test.toString().padStart(2, '0')} sec.`;
    }, 1000)
}


function pauseTimer() {
    time.innerText = 'timer paused!'
}



