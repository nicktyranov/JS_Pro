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
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    getAmount() {
        return this.#amount;
    }
}

class FixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.getAmount();
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.getAmount() * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.getAmount() * this.items;
    }
}

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling(10, 10);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(5, 20);
console.log(itemBilling.calculateTotal());
