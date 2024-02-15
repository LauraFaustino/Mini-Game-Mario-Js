const mario = document.querySelector('.mario')

const fcJumpingMario = () => {
    mario.classList.add('jumping-mario');

    setTimeout(() =>{
        mario.classList.remove('jumping-mario');
    }, 500)
}

document.addEventListener('keydown', fcJumpingMario);
