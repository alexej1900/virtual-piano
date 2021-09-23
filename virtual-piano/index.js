const piano = document.querySelector('.piano');

// события нажатия кнопки мыши
const activateNextKey = (event) => {
    event.target.classList.add('piano-key-active');
    const src = `assets/audio/${event.target.dataset.note}.mp3`;
    playAudio(src);
}

// Деактивация клавиши, с которой ушла мышь
const deactivatePrevKey = (event) => {
    event.target.classList.remove('piano-key-active');
}

// добавление активности клавишам, добавление слушателей движения мыши
const activateKey = (event) => {
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add('piano-key-active');
        const src = `assets/audio/${event.target.dataset.note}.mp3`;
        playAudio(src);
    }
    pianoКeys.forEach((el) => {
        el.addEventListener('mouseover', activateNextKey);
        el.addEventListener('mouseout', deactivatePrevKey);
    })
}

// Удаление активности клавиш, снятие слушателей
const deactivateKey = function() {
    pianoКeys.forEach((el) => {
        el.classList.remove('piano-key-active');
        el.removeEventListener('mouseover', activateNextKey);
        el.removeEventListener('mouseout', deactivatePrevKey);
    })
}

// Добавление слушателей нажатия и отпускания кнопки мыши
piano.addEventListener('mousedown', activateKey);
window.addEventListener('mouseup', deactivateKey);

// событие нажатия кнопки клавиатуры
window.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    key.classList.add('piano-key-active');
    const src = `assets/audio/${key.dataset.note}.mp3`;
    playAudio(src);
});

// событие отпускания кнопки клавиатуры
window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    key.classList.remove('piano-key-active');
});

// Функция проигрывания звуков
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}