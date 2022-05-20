const todoItem = (title, description, dueDate, priority) => {
  return {title, description, dueDate, priority};
}

const project = (title, desc, dueDate, priority) => {
  let isActive = false;
  const todoList = [];
  const getToDoList = () => {
    return todoList.slice();
  }
  const addToList = (title, description, dueDate, priority) => {
    todoList.push(todoItem(title, description, dueDate, priority));
  }
  
  return {title, desc, dueDate, priority, isActive, getToDoList, addToList};
}

const projects = (() => {
  const listOfProjects = [];
  const getListOfProjects = () => {
    return listOfProjects.slice();
  }
  const addProject = (title, desc, dueDate, priority) => {
    listOfProjects.push(project(title, desc, dueDate, priority));
    if (listOfProjects.length === 1){
      setActiveProject(0);
    }
  }
  const removeProject = (index) => {
    if (listOfProjects[index].isActive == true){
      listOfProjects.splice(index, 1);
      setActiveProject(0);
    } else {
      listOfProjects.splice(index, 1);
    }
  }
  const setActiveProject = (index) => {
    if (listOfProjects.length === 0){return};
    listOfProjects.forEach((project) => {
      project.isActive = false;
    })
    console.log(index);
    listOfProjects[index].isActive = true;
  }
  
  return {getListOfProjects, addProject, removeProject, setActiveProject};
})();



projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.addProject("Test Project2", "Description for test project 2", "2022-05-05", "Medium");
projects.addProject("Test Project3", "Description for test project 3", "2022-05-05", "High");
projects.addProject("Example Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-05", "High");
projects.addProject("Test Project2", "Description for test project 2", "2022-05-05", "Medium");
projects.addProject("Test Project3", "Description for test project 3", "2022-05-05", "High");

export default projects;