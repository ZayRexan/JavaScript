/**
 * Это ToDo List
 * 
 * Его функции:
 * 	- function addTask(task) - Добовление новой задачи
 * 	- changeStatus(task, status) - Изменение статуса существующей задаче
 * 	- addTask(task) - Удаление существующией задачи
 * 	- showList() - Показ всех задач со статусами
 */

const list = {
	"create a new practice task": "In Progress",
	"create a new task": "In Progress",
	"make a bed": "Done",
	"make a ded": "Done",
	"write a post": "To Do",
	"write a posts": "To Do",
	"write a postst": "To Do",
};

function changeStatus(task, status) {
	list[task] = status;
};

function addTask(task) {
	list[task] = 'To Do';
};

function deleteTask(task) {
	delete list[task];
};

function showList() {
	let todo = 'To Do:';
	let inProgress = 'In Progress:';
	let done = 'Done:';
	let counterTodo = 0;
	let counterProg = 0;
	let counterDone = 0;
	let obj;


	for (let key in list) {
		let task = list[key];

		if (task === "To Do") {
			console.log(todo);
			todo = '	' + key + ',';
			obj = '	' + key;
			counterTodo++;
		};
	};
	if (counterTodo >= 1) {
		console.log(obj);
	} else if (counterTodo === 0) {
		console.log(todo);
		console.log('	' + '-');
	};

	// --------------------------------------

	for (let key in list) {
		let task = list[key];

		if (task === "In Progress") {
			console.log(inProgress);
			inProgress = '	' + key + ',';
			obj = '	' + key;
			counterProg++;
		};
	};
	if (counterProg >= 1) {
		console.log(obj);
	} else if (counterProg === 0) {
		console.log(inProgress);
		console.log('	' + '-');
	}

	// --------------------------------------

	for (let key in list) {
		let task = list[key];

		if (task === "Done") {
			console.log(done);
			done = '	' + key + ',';
			obj = '	' + key;
			counterDone++;
		};
	};
	if (counterDone >= 1) {
		console.log(obj);
	} else if (counterDone === 0) {
		console.log(done);
		console.log('	' + '-');
	};

}

showList();

console.log('=============')

changeStatus('Browser', 'In Progress')
showList()