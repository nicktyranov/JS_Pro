console.log('DZ-12');

//Современный Асинхронный JavaScript
/*
Создать функцию race(), которая будет принимать массив Promise, и возвращать первый успешно выполненный или отклоненный. 

В git создать ветку: 12-promlse-race
*/
async function makeConnection() {
    const request = await fetch('https://www.boredapi.com/api/activity');
    const data = await request.json()
    return data;
}

async function race() {
    const res = await Promise.race([
        makeConnection(),
        makeConnection(),
        makeConnection()
    ]);
    console.log(res);
}
race()