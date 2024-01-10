'use strict';
/*
Сделайте сборку для упражнения из предыдущего ДЗ (User и Tasks) через rollup, при этом оформив команду в package.Json - npm run build для запуска rollup и прт start для запуска live-server. 

Все необходимые dev зависимости для работы должны быть установлены. 

В git создать ветку: 15-build
*/
import { Task } from './task.js';
import { User } from './user.js';

const myTask = new Task('Work');
console.log(myTask);

const user = new User(myTask);
console.log(user);
user.do();