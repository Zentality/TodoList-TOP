let todoItem = (title, description, dueDate, priority) => {

  return {title, description, dueDate, priority};
}



let project = (title, dueDate) => {
  let todoList = [];

  let getToDoList = () => {
    return todoList.slice();
  }

  let addToList = (title, description, dueDate, priority) => {
    todoList.push(todoItem(title, description, dueDate, priority));
  }

  return {title, dueDate, getToDoList, addToList};
}



let projects = (() => {
  let listOfProjects = [];

  return {listOfProjects};
})();