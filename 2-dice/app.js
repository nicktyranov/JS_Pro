console.log('DZ-2');

//Домашнее задание - Расчёты и math
/*
Сделать функцию для настольных игр. Она принимает тип dice, который надо бросить: d4, d6, d8,d10,d12, d16, d20 и возвращает случайное целое число на этом интервале с включенными границами: 
– d6 - возможные значения - 1,2,3,4,5,6
*/
function diceRandom(dice) {
	let startNum = 1;

	const allDices = [
		{ name: 'd4', end: 4 },
		{ name: 'd6', end: 6 },
		{ name: 'd8', end: 8 },
		{ name: 'd10', end: 10 },
		{ name: 'd12', end: 12 },
		{ name: 'd16', end: 16 },
		{ name: 'd20', end: 20 },
	];

	const endNum = allDices.find((el) => el.name === dice)?.end;

	let rez = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);

	return rez;
}
console.log(diceRandom('d4'));

for (let i = 0; i < 11; i++){
	console.log(diceRandom('d20'));
}