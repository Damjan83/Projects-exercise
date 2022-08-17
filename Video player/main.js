const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if(video.paused) {
    //     video.play
    // }else{
    //     video.paused
    // }
}

function updateButton() {
    const icon = this.paused ?  '>' : '||';
    toggle.textContent = icon;
}

function skip() {
    console.log('skiping');
}


video.addEventListener('click' , togglePlay)
video.addEventListener('play' , togglePlay)
video.addEventListener('pause' , togglePlay)

toggle.addEventListener('click' , togglePlay)
skipButtons.forEach(button => button.addEventListener('click' , skip))