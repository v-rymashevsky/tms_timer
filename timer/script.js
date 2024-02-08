const root = document.getElementById('root');
const time = document.querySelector('.time');
const startButton = document.querySelector('.button-start');
const pauseButton = document.querySelector('.button-pause');



// event listeners
startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)

// function reenableBtn() { 
//     startButton.disabled = false; 
//     pauseButton.disabled = true; 

// }

//functions

let testID2;
let count = 0;

function startTimer() { 
    // time.innerText = '00 sec.';
    testID2 = setInterval(() => {
    count++;
    time.innerText = `${count.toString().padStart(2, '0')} sec.`;
    }, 1000)
    startButton.disabled = true; 
}

function pauseTimer () { 
    clearInterval(testID2)
    // testID2 = null;
    startButton.disabled = false; 


}
