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

  let removeProject = (index) => {
    listOfProjects.splice(index, 1);
  }
  
  return {getListOfProjects, addProject, removeProject};
})();

projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "1");
projects.addProject("Test Project2", "Description for test project 2", "2022-05-05", "2");
projects.addProject("Test Project3", "Description for test project 3", "2022-05-05", "1");

export default projects;