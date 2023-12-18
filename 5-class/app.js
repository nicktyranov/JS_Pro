console.log('DZ-5');

/*
Домашнее задание - Классы
*/
/*
Создайте класс Car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе). 
Сделайте для него возможность менять пробег через get и set. 
Добавьте метод info, который выводит в консоль марку, модели и пробег.
*/

class Car01 {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, miles) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = miles;
    }

    info() {
        return `brand: ${this.#brand}
        model: ${this.#model}
        mileage: ${this.#mileage}`
    }

    get mileage() {
        return this.#mileage
    }

    set mileage(value) {
    if (value >= 0) {
      this.#mileage = value;
    } else {
      console.log('error');
    }
  }
}

let car01_1 = new Car01('Tesla', 'Model S', 100);
console.log(car01_1);
console.log(car01_1.mileage);
console.log(car01_1.mileage(999));
console.log(car01_1);
