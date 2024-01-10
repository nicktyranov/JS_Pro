console.log('DZ-13');

//Домашнее задание - Продвинутый DOM и Events 
/*
Сделать 5 кнопок с текстом "Нажми меня" и div, где отображается число нажатий (по умолчанию 0). 
При нажатии кнопки, текст на ней меняется на "Нажата!" У всех остальных - "Нажми меня" 
С нажатием любой кнопки счетчик увеличивается на 1. 

В git создать ветку: 13-buttons
*/

let totalpoints = 0;
const wrapper_5 = document.querySelector('.wrapper_5');
const pointsDisplay = document.querySelector('.wrapper_5_button_points');
let previousButton = null; 

wrapper_5.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        if (previousButton) {
            previousButton.innerText = 'Нажми меня';
        }

        event.target.innerText = 'Нажата!';
        totalpoints++;
        pointsDisplay.innerText = totalpoints;

        previousButton = event.target;
    }
});