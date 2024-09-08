import getWord from './words.js';

function initMenu(){
    const menu = document.querySelector('.js-menu');

    function openMenu(){
        const classMenu = 'openMenu'
        menu.previousElementSibling.classList.toggle(classMenu);
    }

    menu.onclick = openMenu;
}

initMenu();

function initGame(){
    const startButton = document.querySelector('.js-startButton');
    const standardGameButton = document.querySelector('.js-standardButton');
    const choiceButton = document.querySelector('.js-choiceButton');

    const sections = document.querySelectorAll('.js-section');
    const classSectionActive = 'activeSection';

    const inputWord = document.querySelector('.js-inputWord');
    const inputClue = document.querySelector('.js-inputClue');

    function startGame(event){
        const itemClick = event.target;

        const wordContainer = document.querySelector('.js-containerWord')
        const clueText = document.querySelector('.js-clue');

        if(itemClick == standardGameButton){
            const wordSelect = getWord();
            const wordSelectUpperCase = wordSelect.word.toUpperCase();
            const wordLetters = wordSelectUpperCase.split(/(?!$)/);
            
            clueText.innerHTML = `<b>Dica:</b> ${wordSelect.clue}`;

            wordLetters.forEach((wordLetter, index) => {

                if(index == 0){
                    wordContainer.innerHTML += 
                    `<div>
                        <span class="letter js-letter">${wordLetter}</span>
                    </div>`;
                } else if(wordLetter === ' '){
                    wordContainer.innerHTML += `<div></div>`
                } else {
                    wordContainer.children[wordContainer.children.length - 1].innerHTML += 
                    `<span class="letter js-letter">${wordLetter}</span>`;
                }
            });

            createButtons();

        } else if(inputWord.value && inputClue.value){
            
            sections[1].classList.remove(classSectionActive);
            sections[2].classList.add(classSectionActive);

            const word = inputWord.value;
            const wordUpperCase = word.toUpperCase();
            const wordLetters = wordUpperCase.split(/(?!$)/);

            clueText.innerHTML = `<b>Dica:</b> ${inputClue.value}`;

            wordLetters.forEach((wordLetter, index) => {

                if(index == 0){
                    wordContainer.innerHTML += 
                    `<div>
                        <span class="letter js-letter">${wordLetter}</span>
                    </div>`;
                } else if(wordLetter === ' '){
                    wordContainer.innerHTML += `<div></div>`
                } else {
                    wordContainer.children[wordContainer.children.length - 1].innerHTML += 
                    `<span class="letter js-letter">${wordLetter}</span>`;
                }
            });

            inputWord.value = '';
            inputClue.value = '';
            createButtons();
            
        } else if(inputWord.value == '' || inputClue.value == ''){

            if(!inputWord.value){
                inputWord.style.cssText = 'border: 2px solid #FB566D; background-color: #FFBDCE;';
            }

            if(!inputClue.value){
                inputClue.style.cssText = 'border: 2px solid #FB566D; background-color: #FFBDCE;';
            }

            alert('Preencha todos os dados');

            inputWord.onclick = () => inputWord.style.cssText = '';
            inputClue.onclick = () => inputClue.style.cssText = '';
        }
        
    }

    inputWord.addEventListener('keypress', (event) =>{
        const keyCode = (event.keyCode ? event.keyCode : event.wich);

        if(keyCode > 47 && keyCode < 58){
            event.preventDefault()
        }
    });

    startButton.onclick = () => {
        sections[0].classList.remove(classSectionActive);
        sections[1].classList.add(classSectionActive);
    }

    standardGameButton.onclick = (event) => {
        sections[1].classList.remove(classSectionActive);
        sections[2].classList.add(classSectionActive);
        startGame(event);
    }

    choiceButton.onclick = (event) => {
        startGame(event);
    }
}

initGame();


function createButtons(){
    const containerButtons = document.querySelector('.js-containerButtons');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    containerButtons.innerHTML = '';
    
    alphabet.split('').forEach((letter) => {
        containerButtons.innerHTML += 
        `<button class="buttons-letters js-buttonsClick">${letter}</button>`;
    });
    
    const buttons = document.querySelectorAll('.js-buttonsClick');
    
    buttons.forEach((buttonLetter) => {
        buttonLetter.onclick = (event) => {
            clickedLetter(event);
        };
    });
}

let imagesExist = 0;
let correctLetters = 0;

function clickedLetter(event){
    const lettersForca = document.querySelectorAll('.js-letter');
    const buttonClicked = event.target;
    const classLetter = 'correctLetter';
    const classButtonCorrect = 'correct';
    const classButtonIncorrect = 'incorrect';

    lettersForca.forEach((letterForca) => {
        const normalizedLetter = letterForca.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(normalizedLetter == buttonClicked.textContent){
            letterForca.classList.add(classLetter)
            buttonClicked.classList.add(classButtonCorrect);

            buttonClicked.onclick = null;
            correctLetters++;
        }
    });

    if(correctLetters == lettersForca.length){
        const win = document.querySelector('.js-youWin');
        const classWin = 'youWin';

        win.classList.add(classWin);
    }

    if(!buttonClicked.classList.contains(classButtonCorrect)){

        buttonClicked.classList.add(classButtonIncorrect);
        buttonClicked.onclick = null;

        imagesExist++
    
        const containerImages = document.querySelector('.js-forcaContainer');
        const classBody = 'dark';
    
        if(imagesExist < 7){

            if(document.body.classList.contains(classBody)){
                containerImages.innerHTML += 
                `<img src="Assets/Images/img${imagesExist} dark.svg" alt="image${imagesExist}"></img>`;;
            } else {
                containerImages.innerHTML += 
                `<img src="Assets/Images/img${imagesExist}.svg" alt="image${imagesExist}"></img>`;
            }

        }

        if(imagesExist > 6){
            const lost = document.querySelector('.js-youLost');
            const classLost = 'youLost';

            lost.classList.add(classLost);
        }
    }
}

function initFinishGame(){
    const buttonsRestart = document.querySelectorAll('.js-buttonRestart');
    const closeNotification = document.querySelectorAll('.js-close');

    buttonsRestart.forEach((buttonRestart) => {
        buttonRestart.onclick = () => {
            window.location.reload();
        }
    });

    closeNotification.forEach((close) => {
        close.onclick = () => {
            window.location.reload();
        }
    });
}

initFinishGame();