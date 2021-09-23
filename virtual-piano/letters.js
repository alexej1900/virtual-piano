const btnContainer = document.querySelector('.btn-container');
const pianoКeys = document.querySelectorAll('.piano-key');
btnContainer.addEventListener('mousedown', (e) => {
    if (!e.target.classList.contains('btn-active')) {
        e.target.parentElement.children[0].classList.toggle('btn-active');
        e.target.parentElement.children[1].classList.toggle('btn-active');
        if (e.target.innerText == 'Letters')
            for (let elem of pianoКeys)
                elem.classList.add('letter');
        else
            for (let elem of pianoКeys)
                elem.classList.remove('letter');
    }
});