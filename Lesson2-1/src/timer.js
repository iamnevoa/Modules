import { formatError } from "./common.js";

document.getElementById('startButton').addEventListener("click", tick);

function tick() {
    let time = document.getElementById('inputTime').value * 60;
    let message = document.getElementById('timerLeft');
    if (!time) {
        message.innerHTML = formatError("Надо ввести количество минут!");
        clearInterval(stop)
    };
    let stop = setInterval(() => {
        message.innerHTML = '';
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        if (seconds <= 0 && minutes <= 0) {
            message.innerHTML = formatError('Время вышло!');

            playSound();
            clearInterval(stop);
        }
        else {
            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;
            message.innerHTML = minutes + ':' + seconds;
        }
        time--;
    }, 1000);
    document.getElementById('stopButton').addEventListener("click", function () {
        clearInterval(stop);
    })
}

function playSound() {
    let audio = new Audio;
    audio.src = './src/media/audio.mp3';
    audio.play();

}
