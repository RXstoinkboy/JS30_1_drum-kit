document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('keydown', (e) => {

        let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!sound) { return };
        sound.currentTime = 0;
        sound.play();

        let button = document.querySelector(`.button[data-key="${e.keyCode}"]`);
        button.classList.add('playing');
        button.addEventListener('transitionend', () => {
            button.classList.remove('playing');
        })
        console.log(button);
    })

})