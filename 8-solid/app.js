console.log('DZ-8');

//Домашнее задание - SOLID
/*
SOLID 

Спроектируйте класс Billing co свойством amount и методом calculateTotal для расчёта счёта. Сделайте разный calculateTotal разных типов: 

• fixBilling - где нужно вернуть amount как результат 

• hourBilling - который считает amount * число часов 

• itemBilling где считается amount * число элементов 

Соблкщайте принцип открытости / закрытости! 

В git создать ветку: 8-solid
*/

class Billing {
	#amount = 0;
	#rez = 0;

	constructor(amount) {
		this.#amount = amount;
	}

	calculateTotal(rez) {
		return this.#rez
	}
}

class FixBilling extends Billing{
	#amount = 0;
	#rez = 0;
	
	constructor(amount) {
		super(amount);
	}

	calculateTotal(amount) {
		this.#rez = amount
		return this.#rez 
	}
}

class HourBilling extends Billing{
	#amount = 0;
	#rez = 0;
	
	constructor(amount, hours) {
		super(amount);
		this.hours = hours;
	}
	
	calculateTotal(amount, hours) {
		this.#rez = amount * hours
		return this.#rez 
	}
}

class ItemBilling extends Billing{
	#amount = 0;
	#rez = 0;
	
	constructor(amount, items) {
		super(amount);
		this.items = items;
	}
	
	calculateTotal(amount, items) {
		this.#rez = amount * items
		return this.#rez 
	}
}


const fixBilling = new FixBilling();
console.log(fixBilling.calculateTotal(100))

const hourBilling = new HourBilling();
console.log(hourBilling.calculateTotal(100));

const itemBilling = new ItemBilling();
console.log(hourBilling.calculateTotal(100))