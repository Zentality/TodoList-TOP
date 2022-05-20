import projects from "./projects.js";

let displayController = (() => {
  let addProjectModal = document.querySelector(".addProject")
  let addProjectButton = document.querySelector(".addProjectButton");
  addProjectButton.addEventListener("click", () => {
    addProjectModal.style.display = "flex";
  })
  addProjectModal.addEventListener("click", (e) => {
    if (e.target == addProjectModal){
      addProjectModal.style.display = "none";
    }
  })

  let closeAddProject = document.querySelector(".closeAddProject");
  closeAddProject.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  })

  let createDeleteButton = () => {
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

  let attachProjectListListeners = () => {
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

  let projectListDom = document.querySelector(".projects>ul");
  let refreshProjectList = () => {
    projectListDom.textContent = "";
    projects.getListOfProjects().forEach((project, index) => {
      let tempLi = document.createElement("li");
      if (project.isActive){
        tempLi.classList.add("active");
        loadProject(index);
      }
      tempLi.textContent = project.title;
      tempLi.dataset.index = index;
      tempLi.appendChild(createDeleteButton());
      projectListDom.appendChild(tempLi);
    })
    attachProjectListListeners();
  }

  let loadProject = (index) => {
    let projectFields = document.querySelectorAll(".projectField");
    let project = projects.getListOfProjects()[index];
    if (project == undefined){return};
    projectFields[0].textContent = project.title;
    projectFields[1].textContent = (() => {
      switch (project.priority) {
        case "1": return "High";
        case "2": return "Medium";
        case "3": return "Low";
      }
    })();
    projectFields[2].textContent = project.desc;
    projectFields[3].textContent = project.dueDate;
  }

  let addProject = document.querySelector(".submitAddProject");
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
      dueDate = "";
      addProjectModal.style.display = "none";
      refreshProjectList();
    }
  })

  let initialPageLoad = () => {
    refreshProjectList();
    loadProject(0);
  }
  initialPageLoad();
  

})();

export default displayController;