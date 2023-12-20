console.log('DZ-10');

//Домашнее задание - Promise
/*
Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto 
После получения, получите информацию о первой его ablility по ссылке, которая приходит при первом запросе. Там найдите описание на английском и выведите в консоль:

function requestDescription() {
    let newUrl = ''
    const request_4 = new XMLHttpRequest();
    request_4.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/');
    request_4.send();

    request_4.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        newUrl = data.abilities[0].ability.url;
        console.log(newUrl)
    
        const newRequest = new XMLHttpRequest();
        newRequest.open('GET', newUrl);
        newRequest.send();

        newRequest.addEventListener('load', function () {
            const newData = JSON.parse(this.responseText);
            console.log(newData);
            console.log(newData.effect_entries[1].effect)
        })
    })
}

requestDescription()
*/

let newUrl = '';

function pokemonPromiseGetDescription(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            newUrl = data.abilities[0].ability.url;
            console.log(newUrl);
            return newUrl;
        })
        .catch(error => console.log(error));
}

function pokemonPromiseGetDescription2(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data.effect_entries[1].effect))
        .catch(error => console.log(error));
}
// Используем промисы для управления последовательностью вызовов
pokemonPromiseGetDescription('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(newUrl => pokemonPromiseGetDescription2(newUrl))
    .catch(error => console.log(error));