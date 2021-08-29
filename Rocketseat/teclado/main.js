const keys = document.querySelectorAll('.key')

function getKeyCode(event){
    return event.type === "keydown" ? event.keyCode : event.target.dataset.key;
}
function playNote(event){
    const key = document.querySelector(`.key[data-key="${getKeyCode(event)}"]`);

    !!key && playAudio(event);
}
function addPlayingClass(event){
    event.target.classList.toggle("playing")
}
function removePlayingClass(event){
    event.target.classList.remove('playing')
}
function playAudio(event){
    const audio = document.querySelector(`audio[data-key="${getKeyCode(event)}"]`);
    audio.currentTime = 0;
    audio.play()
    addPlayingClass(event);
}
keys.forEach( function(key){
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
})
window.addEventListener('keydown', playNote)