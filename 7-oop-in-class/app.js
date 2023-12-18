console.log('DZ-7');

//Домашнее задание - принципы ООП в классах
/*
Повторите упражнение из раздела 7, но используя классы. 
Сделайте переопределение метода говорить для эльфа и для орка< 
В git создать ветку: 7-oop-in-class
*/

class Hero_2 {
	constructor(name, race, language) {
		this.name = name;
		this.race = race;
		this.language = language;
	}

	speak() {
		return `${this.name} говорит на ${this.language}`;
	}
}

const hero2_1 = new Hero_2('Alex', 'human', 'english');
console.log(hero2_1);
console.log(hero2_1.speak());

class Hero_orc_2 extends Hero_2 {
	constructor(name, race, language) {
		super(name, race, language);
		this.hasWeapon = true;
	}

	hit() {
		return `${this.name} расы ${this.race} сделал удар`;
	}

	speak() {
		return `!!!!`;
	}
}

const hero2_2 = new Hero_orc_2('AAA', 'orc', 'rus');
console.log(hero2_2);
console.log(hero2_2.hasWeapon);
console.log(hero2_2.speak());
console.log(hero2_2.hit());
	
class Hero_elf_2 extends Hero_2 {
	constructor(name, race, language) {
		super(name, race, language);
		this.canDoMagic = true;
	}

	useMagic() {
		return `я колдую`;
	}

	speak() {
		return `¯\_(ツ)_/¯`;
	}
}
const hero3_2 = new Hero_elf_2('BBB', 'elf', 'bel')

console.log(hero3_2);
console.log(hero3_2.canDoMagic);
console.log(hero3_2.speak());
console.log(hero3_2.useMagic());