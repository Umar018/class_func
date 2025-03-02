const todoList = {
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
        console.log(`qoshildi: "${task}"`);
    },

    removeTask(index){
        this.tasks.splice(index, 1);
        console.log("id togri bolsa udalit boldi")
    },

    displayTasks(){
        console.log("Todo List:");
        this.tasks.forEach((task, i) => console.log(`${i}: ${task}`));
    }
}

todoList.addTask("Breakfast at 8:00 AM");
todoList.addTask("Meeting at 12:00 PM");
todoList.displayTasks();
todoList.removeTask(0);
todoList.displayTasks();
