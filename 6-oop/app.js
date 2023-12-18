console.log('DZ-6');

/*
Домашнее задание - Наследование
Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить (выводит язык и имя в консоль). 

Создать класс Орка, который наследуется от Персонажа, у которого есть оружие и который имеет метод - удара. 

Создать класс Эльфа, который наследуется от Персонажа, у которого есть типа заклинании и метод - создать заклинание. 

Использовать прототипное наследование. Все методы про< выводят что-то в консоль.

5-oop (опечатка на презе, нужно 6-оор)
*/

const Hero = function(name, race, language) {
		this.name = name;
		this.race = race;
		this.language = language;
}

Hero.prototype.speak = function () {
	return `${this.name} говорит на ${this.language}`;
}

const hero1 = new Hero('Alex', 'human', 'english');
console.log(hero1);
console.log(hero1.speak());

const Hero_orc = function (name, race, language) {
	Hero.call(this, name, race, language);
	this.hasWeapon = true;
}
Hero_orc.prototype = Object.create(Hero.prototype);
Hero_orc.prototype.constructor = Hero_orc;

Hero_orc.prototype.hit = function () {
	return `${this.name} расы ${this.race} сделал удар`;
}

const hero2 = new Hero_orc('AAA', 'orc', 'rus');
console.log(hero2);
console.log(hero2.hasWeapon);
console.log(hero2.speak());
console.log(hero2.hit());
	
const Hero_elf = function (name, race, language) {
	Hero.call(this, name, race, language);
	this.canDoMagic = true;
}

Hero_elf.prototype = Object.create(Hero.prototype);
Hero_elf.prototype.constructor = Hero_elf;

Hero_elf.prototype.useMagic = function () {
	return `я колдую`;
}

const hero3 = new Hero_elf('BBB', 'elf', 'bel')

console.log(hero3);
console.log(hero3.canDoMagic);
console.log(hero3.speak());
console.log(hero3.useMagic());