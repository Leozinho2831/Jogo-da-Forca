import getWord from './words.js';

const inputCheckbox = document.querySelector('#checkbox');
const classBody = 'dark';

function darkModeActive(){
    const darkModeActive = localStorage.getItem('darkMode');

    if(darkModeActive === 'true'){

        inputCheckbox.checked = true;
        document.body.classList.add(classBody);

    } else {

        inputCheckbox.checked = false;
        document.body.classList.remove(classBody);

    }
}

darkModeActive();

if(inputCheckbox){
    function darkMode(){
        document.body.classList.toggle(classBody);
        
        localStorage.setItem('darkMode', inputCheckbox.checked);
    }
    
    inputCheckbox.onchange = darkMode;
}