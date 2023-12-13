const buttons=document.querySelectorAll('button')

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let letter=button.innerHTML
        makeSound(letter)
        buttonAnimation(letter)
    })
})



document.addEventListener('keydown',(e)=>{
    makeSound(e.key)
    buttonAnimation(e.key)
})

function makeSound(key){
    let audio
    switch(key){
        case 'w':
            audio=new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        
        case 'a':
            audio=new Audio('sounds/tom-2.mp3')
            audio.play()
            break;

        case 's': 
            audio=new Audio('sounds/tom-3.mp3')
            audio.play()
            break;

        case 'd':
            audio=new Audio('sounds/tom-4.mp3')
            audio.play()
            break;

        case 'j':
            audio=new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;

        case 'k':
            audio=new Audio('sounds/snare.mp3')
            audio.play()
            break;

        case 'l':
            audio=new Audio('sounds/crash.mp3')
            audio.play()
            break;
}
}

function buttonAnimation(pressedKey){
    let currKey=document.querySelector("."+ pressedKey)
    currKey.classList.add('pressed')
    setTimeout(()=>{
        currKey.classList.remove("pressed")
    },100)
}