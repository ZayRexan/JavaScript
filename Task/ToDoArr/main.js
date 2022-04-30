const STATUS = {
	TODO: "To Do",
	IN_PROGRESS: "In Progress",
	DONE: "Done"
};

const DEFAULT_STATUS = STATUS.TODO;

const PRIORITY = {
	HIGH: "High",
	LOW: "Low"
};

const DEFAULT_PRIORITY = PRIORITY.LOW;

const list = [{
	name: 'Create a post',
	status: STATUS.IN_PROGRESS,
	priority: PRIORITY.LOW
}, {
	name: 'Test',
	status: STATUS.TODO,
	priority: PRIORITY.HIGH
}, {
	name: 'Testpop',
	status: STATUS.TODO,
	priority: PRIORITY.HIGH
}]

function addTask(task) {
	list.push({
		name: task,
		status: DEFAULT_STATUS,
		priority: DEFAULT_PRIORITY
	})
};

function deleteTask(task) {
	let del = list.find(item => item.name == task);;
	list.splice(del, 1);
}

function changeStatus(task, status) {
	let change = list.find(item => item.name == task);
	change.status = status;
}

function showList() {
	let listToDo = '';
	let listInProgress = '';
	let listDone = '';
	list.forEach(item => {
		if (item.status == STATUS.TODO) {
			listToDo += '\n\t' + item.name;
		} else {
			listDone = '\n\t' + '-';
		}
	});
	list.forEach(item => {
		if (item.status == STATUS.IN_PROGRESS) {
			listInProgress += '\n\t' + item.name;
		} else {
			listDone = '\n\t' + '-';
		}
	})
	list.forEach(item => {
		if (item.status == STATUS.DONE) {
			listDone += '\n\t' + item.name;
		} else {
			listDone = '\n\t' + '-';
		}
	})


	console.log(STATUS.TODO + ':' + listToDo + '\n')
	console.log(STATUS.IN_PROGRESS + ':' + listInProgress + '\n')
	console.log(STATUS.DONE + ':' + listDone + '\n')


};
// showList();

function showBy(method) {
	if (method === 'status') {
		let listToDo = '';
		let listInProgress = '';
		let listDone = '';
		list.forEach(item => {
			if (item.status == STATUS.TODO) {
				listToDo += '\n\t' + item.name;
			} else {
				listDone = '\n\t' + '-';
			}
		});
		list.forEach(item => {
			if (item.status == STATUS.IN_PROGRESS) {
				listInProgress += '\n\t' + item.name;
			} else {
				listDone = '\n\t' + '-';
			}
		})
		list.forEach(item => {
			if (item.status == STATUS.DONE) {
				listDone += '\n\t' + item.name;
			} else {
				listDone = '\n\t' + '-';
			}
		})


		console.log(STATUS.TODO + ':' + listToDo + '\n')
		console.log(STATUS.IN_PROGRESS + ':' + listInProgress + '\n')
		console.log(STATUS.DONE + ':' + listDone + '\n')
	} else if (method === 'priority') {
		let listHigh = '';
		let listLow = '';
		list.forEach(item => {
			if (item.priority == PRIORITY.HIGH) {
				listHigh += '\n\t' + item.name;
			} else {
				listHigh = '\n\t' + '-';
			}
		});

		list.forEach(item => {
			if (item.priority == PRIORITY.LOW) {
				listLow += '\n\t' + item.name;
			} else {
				listLow = '\n\t' + '-';
			}
		});

		console.log(PRIORITY.HIGH + ':' + listHigh + '\n')
		console.log(PRIORITY.LOW + ':' + listLow + '\n')
	}
}

showBy('priority')