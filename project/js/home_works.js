
// дз часть 1
// GMAIL
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{5,30}@gmail.com$/g
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT'
        gmailResult.style.color = 'red'
    }
}


// дз часть 2
// MOVE BLOCK
const childBlock = document.querySelector('.child_block')
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 447 && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    } else if(positionY <= 447 && positionX > 447){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }
}

moveBlock()






document.addEventListener('DOMContentLoaded', () => {
    const secondsDisplay = document.getElementById('seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let timer;
    let seconds = 0;

    function updateDisplay() {
        secondsDisplay.textContent = seconds;
    }

    function startTimer() {
        if (timer) return;

        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});

document.addEventListener('DOMContentLoaded',()=>{
    const charactersBlock=document.querySelector('.characters_block');
    const request=new XMLHttpRequest()
    request.open('GET', '../data/person.json');
    request.setRequestHeader('Content-type','application.json');
    request.send();

    request.onload=()=>{
        if (request.status>=200 && request.status<400) {
            console.log('Response text:', request.responseText);
            const characters=JSON.parse(request.responseText);

            characters.forEach((character)=>{
                const characterContainer=document.createElement('div');
                characterContainer.classList.add('character_container');

                characterContainer.innerHTML =`
                <div class="character_photo">
                    <img src="${character.photo}
                    alt="${character.name}"/>
                
                </div>
                <h2>${character.name}</h2>
                <p id="age_part" Age:${character.age}</p>
                <p id="bio_part" Bio:${character.bio}</p>
    
                
                `;
                const h2Element=characterContainer.querySelector('h2');
                const pElements=characterContainer.querySelectorAll('p');

                if (h2Element){
                    h2Element.style.color='white';
                }
                pElements.forEach(p=>{
                    p.style.color='white';
                });
                charactersBlock.append(characterContainer);
            }) ;
        } else {
            console.error('Request failed', request.status);
        }
    }
})









