console.log('DZ-1');

//Домашнее задание - Maps и Sets
/*
сделать с помощью Set уникализацию объектов:
[
	{id: 1, name: "Vasya"},
	{id: 2, name: "Petya"},
	{id: 1, name: "Vasya"},
]

подсказка: map & find
*/
let dz1 = [
	{ id: 1, name: "Vasya" },
	{ id: 2, name: "Petya" },
	{ id: 1, name: "Vasya" },
];

function dz(arr) {
	let uni_Id = new Set();
	let rez = [];
	
	for (let obj of dz1) {
		if (!uni_Id.has(obj.id)) {
			uni_Id.add(obj.id);
			rez.push(obj);
	}
	}
	return rez;
}

console.log(dz(dz1));