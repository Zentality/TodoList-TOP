let todoItem = (title, description, dueDate, priority) => {

  return {title, description, dueDate, priority};
}

let project = (title, desc, dueDate, priority) => {
  let todoList = [];
  let getToDoList = () => {
    return todoList.slice();
  }
  let addToList = (title, description, dueDate, priority) => {
    todoList.push(todoItem(title, description, dueDate, priority));
  }
  
  return {title, desc, dueDate, priority, getToDoList, addToList};
}

let projects = (() => {
  let listOfProjects = [];
  let getListOfProjects = () => {
    return listOfProjects.slice();
  }
  
  let addProject = (title, desc, dueDate, priority) => {
    listOfProjects.push(project(title, desc, dueDate, priority));
  }
  
  return {getListOfProjects, addProject};
})();

export default projects;