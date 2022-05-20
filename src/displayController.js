import projects from "./projects.js";

const displayController = (() => {
  const projectListDom = document.querySelector(".projects>ul");
  const addProjectModal = document.querySelector(".addProject")
  const addProjectButton = document.querySelector(".addProjectButton");
  const closeAddProject = document.querySelector(".closeAddProject");
  const addProject = document.querySelector(".submitAddProject");

  addProjectButton.addEventListener("click", () => {
    addProjectModal.style.display = "flex";
  })
  addProjectModal.addEventListener("click", (e) => {
    if (e.target == addProjectModal){
      addProjectModal.style.display = "none";
    }
  })
  addProject.addEventListener(("click"), () => {
    if (title.value == "" || dueDate.value == ""){
      alert("Please fill all inputs");
    } else {
      let title = document.querySelector("#title");
      let description = document.querySelector("#description");
      let dueDate = document.querySelector("#dueDate");
      let priority = document.querySelector("#priority");
      console.log({priority});
      projects.addProject(title.value, description.value, dueDate.value, priority.value);
      title.value = "";
      description.value = "";
      dueDate.value = "";
      addProjectModal.style.display = "none";
      refreshProjectList();
    }
  })
  closeAddProject.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  })

  const createDeleteButton = () => {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener(("click"), (e) => {
      console.log(e.target.parentElement.dataset.index);
      projects.removeProject(e.target.parentElement.dataset.index);
      refreshProjectList();
    })
    return deleteButton;
  }

  const attachProjectListListeners = () => {
    let projectList = document.querySelectorAll(".projects>ul>li");
    projectList.forEach((project) => {
      project.addEventListener("click", (e) => {
        if (e.target.attributes[0].value !== "delete"){
          projects.setActiveProject(e.target.attributes[0].value);
          refreshProjectList();
        }
      })
    })
  }

  const refreshProjectList = () => {
    projectListDom.textContent = "";
    unloadProjectFields();
    projects.getListOfProjects().forEach((project, index) => {
      let tempLi = document.createElement("li");
      if (project.isActive){
        tempLi.classList.add("active");
        loadProject(index);
      }
      const projectTitle = document.createElement("span");
      projectTitle.textContent = project.title;
      const projectDetails = document.createElement("span");
      projectDetails.textContent = `Due: ${project.dueDate} Priority: ${project.priority}`
      projectTitle.appendChild(projectDetails);
      tempLi.dataset.index = index;
      tempLi.append(projectTitle, createDeleteButton());
      projectListDom.appendChild(tempLi);
    })
    attachProjectListListeners();
  }

  const loadProject = (index) => {
    let projectFields = document.querySelectorAll(".projectField");
    let project = projects.getListOfProjects()[index];
    if (project == undefined){return};
    projectFields[0].textContent = project.title;
    projectFields[1].textContent = project.priority;
    projectFields[2].textContent = project.desc;
    projectFields[3].textContent = project.dueDate;
  }

  const unloadProjectFields = () => {
    const projectFields = document.querySelectorAll(".projectField");
    projectFields.forEach((field) => {
      field.textContent = "";
    })
  }

  refreshProjectList(); //Initial page load
})();

export default displayController;