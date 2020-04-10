window.addEventListener('load', init);
//available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
//To change levels
const curLevel = levels.easy;
//globals variable
let time = curLevel, score = 0, isPlaying;
//DOM elements
const Inword = document.querySelector('#word-input');
const Curword = document.querySelector('#current-word');
const Score = document.querySelector('#score');
const TimeD = document.querySelector('#time');
const Msg = document.querySelector('#message');
const Second = document.querySelector('#seconds');
const words = [
    'programmer',
    'developer',
    'known',
    'JavaScript',
    'poor',
    'rich',
    'C++',
    'life',
    'someone',
    'nodejs',
    'nobody',
    'happy',
    'angular',
    'marvellous',
    'great',
    'gorgeous'
];

//Initialize game
function init() {
//load word from array
    showWord(words);
    //show number of seconds in UI
    Second.innerHTML=curLevel;
    //start matching on word input
    Inword.addEventListener('input', startMatch);
    //call count down every second
    setInterval(countDown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = curLevel + 1;
        showWord(words);
        Inword.value = '';
        score++;
    }
    if (score === -1) {
        Score.innerHTML = 0;
    } else {
        Score.innerHTML = score;
    }
}

//match current word to the word input
function matchWords() {
    if (Inword.value === Curword.innerHTML) {
        Msg.innerHTML = 'Correct!!!';
        return true;
    } else {
        Msg.innerHTML = '';
        return false;
    }
}

//pick and show random word from words
function showWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    Curword.innerHTML = words[randomIndex];
}

//count down timer
function countDown() {
//make sure time is not run out
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    //show time
    TimeD.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        Msg.innerHTML = 'Game Over!!!';
        score = -1;
    }
}
