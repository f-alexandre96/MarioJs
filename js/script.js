const person = document.querySelector('.personagem')/* passa um seletor CSS*/
const pipe = document.querySelector('.pipe')

const jump = () =>{
    person.classList.add('jump');
    setTimeout(() =>{
        person.classList.remove('jump');

    }, 500); 
}

/*salvar referencia do loop dentro da constante como um intervalo*/
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    if(pipePosition <=120){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
    }
}, 10)

document.addEventListener('keydown',jump); /*quando qualquer tecla for apertada, o personagem pula*/