const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
let score = 0;

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500)
}

function scoreCounter() {
    score = score + 1
    document.getElementById('score').innerText = 'score: ' + score
    document.getElementById('points').innerText = 'You scored '+ score + ' points!'
}

function reloadPage() {
    location.reload();
}

let scoreBoard = setInterval(scoreCounter, 100);

function enableRetryButton() {
    const retry = document.getElementById('retry');
    if (retry.style.display === 'none' || retry.style.display === '') {
      retry.style.display = 'block'; // 
    } else {
      retry.style.display = 'none'; // 
    }
}

function showPoints() {
    const points = document.getElementById('points');
    if (points.style.display === 'none' || points.style.display === '') {
      points.style.display = 'block'; // 
    } else {
      points.style.display = 'none'; // 
    }
}

const loop = setInterval(() => {

    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '35px';
        mario.style.transform = 'rotate(-2.3deg)';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop)
        clearInterval(scoreBoard)

        enableRetryButton();
        showPoints();
        
    }

}, 10);
  
document.addEventListener('keydown', jump);
