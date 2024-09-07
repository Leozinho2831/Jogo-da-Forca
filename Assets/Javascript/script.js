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

function initDarkMode(){
    const inputCheckbox = document.querySelector('#checkbox');
    const bodyItem = document.body;
    const classBody = 'dark';
    
    const forcaImage = document.querySelector('.js-forcaContainer img:first-of-type');
    const images = document.querySelectorAll('img[src^="Assets/Images/img"]');
    
    function darkModeActive(){
        const darkModeActive = localStorage.getItem('darkMode');
    
        if(darkModeActive === 'true'){
            inputCheckbox.checked = true;
            bodyItem.classList.add(classBody);
            
            images.forEach((image, index) =>{
    
                image.src = `Assets/Images/img${index + 1} dark.svg`;
                forcaImage.src = 'Assets/Images/Forca suporte dark.svg';
                
            });
        } else {
    
            inputCheckbox.checked = false;
            bodyItem.classList.remove(classBody);
    
        }
    }
    
    darkModeActive();
    
    if(inputCheckbox){
        function darkMode(){
    
            bodyItem.classList.toggle(classBody);
    
            images.forEach((image, index) =>{
                if(bodyItem.classList.contains(classBody)){
    
                    image.src = `Assets/Images/img${index + 1} dark.svg`;
                    forcaImage.src = 'Assets/Images/Forca suporte dark.svg';
    
                } else {
    
                    image.src = `Assets/Images/img${index + 1}.svg`;
                    forcaImage.src = 'Assets/Images/Forca suporte.svg';
                }
            });
    
            localStorage.setItem('darkMode', inputCheckbox.checked);
        }
        
        inputCheckbox.onchange = darkMode;
    }
}

initDarkMode();

function initGame(){
    const startButton = document.querySelector('.js-startButton');
    const standardGameButton = document.querySelector('.js-standardButton');
    const choiceButton = document.querySelector('.js-choiceButton');

    const sections = document.querySelectorAll('.js-section');
    const classSectionActive = 'activeSection';

    function startGame(event){
        const itemClick = event.target;

        const inputWord = document.querySelector('.js-inputWord');
        const inputClue = document.querySelector('.js-inputClue');

        const wordContainer = document.querySelector('.js-containerWord')
        const clueText = document.querySelector('.js-clue');

        if(itemClick == standardGameButton){
            createButtons();
            // necessário chamar a função a parte para não chamar ela novamente e quebrar código
            const wordSelect = getWord();
            const wordSelectLowerCase = wordSelect.word.toLowerCase();
            const wordLetters = wordSelectLowerCase.split(/(?!$)/);
            
            clueText.innerHTML = `<b>Dica:</b> ${wordSelect.clue}`;

            wordLetters.forEach((wordLetter, index) => {

                if(index == 0){
                    wordContainer.innerHTML += 
                    `<div>
                        <span class="letter" word:${wordLetter}>${wordLetter}</span>
                    </div>`;
                } else if(wordLetter === ' '){
                    wordContainer.innerHTML += `<div></div>`
                } else {
                    wordContainer.children[wordContainer.children.length - 1].innerHTML += 
                    `<span class="letter" word:${wordLetter}>${wordLetter}</span>`;
                }
            });

        } else if(inputWord.value && inputClue.value && Number(inputWord.value) === NaN){
            createButtons();
            
            sections[1].classList.remove(classSectionActive);
            sections[2].classList.add(classSectionActive);

            const word = inputWord.value;
            const wordLowerCase = word.toLowerCase();
            const wordLetters = wordLowerCase.split(/(?!$)/);

            clueText.innerHTML = `<b>Dica:</b> ${inputClue.value}`;

            wordLetters.forEach((wordLetter, index) => {

                if(index == 0){
                    wordContainer.innerHTML += 
                    `<div>
                        <span class="letter" word:${wordLetter}>${wordLetter}</span>
                    </div>`;
                } else if(wordLetter === ' '){
                    wordContainer.innerHTML += `<div></div>`
                } else {
                    wordContainer.children[wordContainer.children.length - 1].innerHTML += 
                    `<span class="letter" word:${wordLetter}>${wordLetter}</span>`;
                }
            });

            inputWord.value = '';
            inputClue.value = '';
            
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

        } else if(Number(inputWord.value) !== NaN){

            if(Number(inputWord.value) !== NaN){
                inputWord.style.cssText = 'border: 2px solid #FB566D; background-color: #FFBDCE;';
            }

            inputWord.value = '';
            inputWord.onclick = () => inputWord.style.cssText = '';
            alert('Não pode digitar números como palavra');
        }
        
    }

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
        `<button class="buttons-letters" onclick="clickedLetter(${letter})">${letter}</button>`;
    });
}

// function clickedLetter(letter){

// }