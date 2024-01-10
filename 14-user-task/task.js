'use strict';
/*
Модульность 

Создайте 3 файла: 
user.js - содержит класс User, который в constructor принимает Task, и метод do(), который вызывает у Task метод run(). 

task.js - содержит класс Task с методом run(), который выводит в консоль заданной в constructor сообщение. 

index.js - создаёт Task, a зате1и User с этим Task и вызывает у 
User метод do(). 

В git создать ветку: 14-user-task
*/
export class Task {
	constructor(task) {
		this.task = task;
	}

	run() {
		console.log(this.task);
	}
}