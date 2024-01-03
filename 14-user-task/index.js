'use strict';
/*
Модульность 

Создайте 3 файла: 
user.js - содержит класс User, который в constructor принимает Task, и метод do(), который вызывает у Task метод гип(). 

task.js - содержит класс Task с методом гип(), который выводит в консоль заданной в constructor сообщение. 

index.js - создаёт Task, a зате1и User с этим Task и вызывает у 
User метод do(). 

В git создать ветку: 14-user-task
*/
import { Task } from './task.js';
import { User } from './user.js';

const myTask = new Task('Work');
console.log(myTask);

const user = new User(myTask);
console.log(user);
user.do();