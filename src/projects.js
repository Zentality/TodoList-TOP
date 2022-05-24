/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
const todoItem = (title, description, dueDate, priority) => {
  const due = () => {
    const today = new Date();
    const dueDateArray = dueDate.split("-");
    if (today.getFullYear() > dueDateArray[0]) {
      return true;
    } if (today.getFullYear() < dueDateArray[0]) {
      return false;
    } if (today.getMonth() + 1 > dueDateArray[1]) {
      return true;
    } if (today.getMonth() + 1 < dueDateArray[1]) {
      return false;
    } if (today.getDate() >= dueDateArray[2]) {
      return true;
    }

    return false;
  };
  return {
    title, description, dueDate, priority, due,
  };
};

const project = (title, desc, dueDate, priority) => {
  const isActive = false;
  let todoList = [];
  const getToDoList = () => todoList.slice();
  const addToList = (titleTodo, descTodo, dueDateTodo, priorityTodo) => {
    todoList.push(todoItem(titleTodo, descTodo, dueDateTodo, priorityTodo));
  };
  const removeFromList = (index) => {
    todoList.splice(index, 1);
  };
  const editTodo = (index, title, description, dueDate, priority) => {
    todoList[index] = todoItem(title, description, dueDate, priority);
  };
  const sortTodos = (method) => {
    if (method === 0) {
      todoList = todoList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (method === 1) {
      todoList = todoList.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    } else if (method === 2) {
      todoList = todoList.sort((b, a) => {
        let aValue = 0;
        let bValue = 0;
        if (a.priority === "High") {
          aValue = 2;
        } else if (a.priority === "Medium") {
          aValue = 1;
        }
        if (b.priority === "High") {
          bValue = 2;
        } else if (b.priority === "Medium") {
          bValue = 1;
        }
        return aValue - bValue;
      });
    } else if (method === 3) {
      todoList = todoList.reverse();
    }
  };

  return {
    title, desc, dueDate, priority, isActive, getToDoList, addToList, removeFromList, editTodo, sortTodos,
  };
};

const projects = (() => {
  const listOfProjects = [];
  const getListOfProjects = () => listOfProjects.slice();
  const addProject = (title, desc, dueDate, priority) => {
    listOfProjects.push(project(title, desc, dueDate, priority));
    if (listOfProjects.length === 1) {
      setActiveProject(0);
    }
  };
  const removeProject = (index) => {
    if (listOfProjects[index].isActive === true) {
      listOfProjects.splice(index, 1);
      setActiveProject(0);
    } else {
      listOfProjects.splice(index, 1);
    }
  };
  const setActiveProject = (index) => {
    if (listOfProjects.length === 0) { return; }
    listOfProjects.forEach((project) => {
      project.isActive = false;
    });
    listOfProjects[index].isActive = true;
  };
  const editProject = (index, title, desc, dueDate, priority) => {
    const tempProject = listOfProjects[index];
    tempProject.title = title;
    tempProject.desc = desc;
    tempProject.dueDate = dueDate;
    tempProject.priority = priority;
  };

  return {
    getListOfProjects, addProject, removeProject, setActiveProject, editProject,
  };
})();

// These are just preloaded example projects
projects.addProject("Sample Project", "This is a description for a project example, to get started making your own projects click the plus button on the projects panel", "2022-05-24", "High");
projects.getListOfProjects()[0].addToList("Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-05-24", "Medium");
projects.getListOfProjects()[0].addToList("B Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-23", "High");
projects.getListOfProjects()[0].addToList("Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-04-04", "Low");
projects.getListOfProjects()[0].addToList("Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-27", "Medium");
projects.getListOfProjects()[0].addToList("C Example todo", "Hey I hope you enjoy this project, feel free to delete this todo it is only an example", "2022-04-04", "Low");
projects.getListOfProjects()[0].addToList("Another one", "Also an example, anyway, if you would like to encourage me a follow on github couldn't hurt! The link is in the footer", "2022-05-25", "High");

projects.addProject("Sample 2", "This has no todos, but shows how the project bar looks", "2022-05-05", "Medium");
projects.addProject("SampleSampleSampleSampleSample", "This has no todos, but shows how the project bar looks", "2022-05-05", "Medium");

export default projects;
