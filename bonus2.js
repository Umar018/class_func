class todoList{
    constructor(){
        this.array = []
    }

    addTask(todo){
        this.array.push(todo)
        console.log("qoshildi")
    }

    removeTask(index){
        this.array.splice(index, 1)
    }

    displayTasks(){
        console.log(this.array)
    }
}

const myTodoList = new todoList();
myTodoList.addTask('Breakfast at 8:00 AM');
myTodoList.addTask('Meeting at 12:00 PM');
myTodoList.displayTasks();
myTodoList.removeTask(0);
myTodoList.displayTasks();