import projects from "./projects.js";

const displayController = (() => {
  const addProjects = (() => {
    const addProjectModal = document.querySelector(".addProject")
    const addProjectButton = document.querySelector(".addProjectButton");
    const closeAddProject = document.querySelector(".closeAddProject");
    const addProject = document.querySelector(".submitAddProject");

    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#priority");
    
    addProjectButton.addEventListener("click", () => {
      addProjectModal.style.display = "flex";
    })
    addProjectModal.addEventListener("click", (e) => {
      if (e.target == addProjectModal){
        addProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        addProjectModal.style.display = "none";
      }
    })
    addProject.addEventListener(("click"), () => {
      if (title.value == "" || dueDate.value == ""){
        alert("Please fill all inputs");
      } else {
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
      title.value = "";
      description.value = "";
      dueDate.value = "";
      addProjectModal.style.display = "none";
    })
  })();

  const editProjects = (() => {
    const editProjectModal = document.querySelector(".editProject")
    const closeEditProject = document.querySelector(".closeEditProject");
    const editProject = document.querySelector(".submitEditProject");

    let title = document.querySelector("#titleEdit");
    let description = document.querySelector("#descriptionEdit");
    let dueDate = document.querySelector("#dueDateEdit");
    let priority = document.querySelector("#priorityEdit");

    closeEditProject.addEventListener(("click"), () => {
      editProjectModal.style.display = "none";
      title.value = "";
      description.value = "";
      dueDate.value = "";
      editProjectModal.style.display = "none";
    })
    editProjectModal.addEventListener("click", (e) => {
      if (e.target == editProjectModal){
        editProjectModal.style.display = "none";
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
      }
    })
    editProject.addEventListener(("click"), () => {
      if (title.value == "" || dueDate.value == ""){
        alert("Please fill all inputs");
      } else {
        projects.editProject((editProjectModal.dataset.projectIndex), title.value, description.value, dueDate.value, priority.value);
        title.value = "";
        description.value = "";
        dueDate.value = "";
        editProjectModal.style.display = "none";
        refreshProjectList();
      }
    })

    const updateModal = () => {
      let tempProject = projects.getListOfProjects()[editProjectModal.dataset.projectIndex];
      title.value = tempProject.title;
      description.value = tempProject.desc;
      dueDate.value = tempProject.dueDate;
      priority.value = tempProject.priority;
      editProjectModal.style.display = "none";
    }

    return {editProjectModal, updateModal};
  })();



  const projectListDom = document.querySelector(".projects>ul");

  const createDeleteButton = () => {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener(("click"), (e) => {
      e.stopPropagation();
      projects.removeProject(e.target.parentElement.dataset.index);
      refreshProjectList();
    })
    return deleteButton;
  }

  const createEditButton = () => {
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener(("click"), (e) => {
      editProjects.editProjectModal.dataset.projectIndex = e.target.parentElement.dataset.index;
      editProjects.updateModal();
      editProjects.editProjectModal.style.display = "flex";
      e.stopPropagation();
      refreshProjectList();
    })
    return editButton;
  }

  const attachProjectListListeners = () => {
    let projectList = document.querySelectorAll(".projects>ul>li");
    projectList.forEach((project) => {
      project.addEventListener("click", (e) => {
        console.log(e);
        projects.setActiveProject(e.target.dataset.index);
        refreshProjectList();
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
      projectDetails.textContent = `Due: ${project.dueDate}, Priority: ${project.priority}`
      projectTitle.appendChild(projectDetails);
      tempLi.dataset.index = index;
      tempLi.append(projectTitle, createEditButton(), createDeleteButton());
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