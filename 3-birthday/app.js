console.log('DZ-3');

/*
Домашнее задание - Даты и время

Сделать функцию валидации возраста. На вход передаётся строка даты рождения пользователя вида "2022-01-01". 
Необходимо вывести true, если ему больше 14 лет и false, если 
меньше
*/
function is14Years(date) {
	let now = new Date();

	let okDate = now.setFullYear(now.getFullYear() - 14);

	let userDate = Number(new Date(date));

	return userDate < okDate
}
console.log(is14Years("2022-01-01"));