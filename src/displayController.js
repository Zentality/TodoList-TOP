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

  let attachDeleteButtons = () => {
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
      button.addEventListener(("click"), (e) => {
        projects.removeProject(e.target.parentElement.attributes[0].value);
        refreshProjectList();
      })
    })
  }

  let attachProjectListListeners = () => {
    let projectList = document.querySelectorAll(".projects>ul>li");
    projectList.forEach((project) => {
      project.addEventListener("click", (e) => {
        loadProject(e.target.attributes[0].value);
      })
    })
  }

  let projectListDom = document.querySelector(".projects>ul");
  let refreshProjectList = () => {
    projectListDom.textContent = "";
    projects.getListOfProjects().forEach((project, index) => {
      let tempLi = document.createElement("li");
      tempLi.textContent = project.title;
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete project";
      deleteButton.classList.add("delete");
      tempLi.dataset.index = index;
      tempLi.appendChild(deleteButton);
      projectListDom.appendChild(tempLi);
    })
    attachDeleteButtons();
    attachProjectListListeners();
  }
  refreshProjectList(); //Automatically populate page on load

  let loadProject = (index) => {
    let projectFields = document.querySelectorAll(".projectField");
    let project = projects.getListOfProjects()[index];
    projectFields[0].textContent = project.title;
    projectFields[1].textContent = project.priority;
    projectFields[2].textContent = project.desc;
    projectFields[3].textContent = project.dueDate;
  }

  let addProject = document.querySelector(".submitAddProject");
  addProject.addEventListener(("click"), () => {
    if (title.value == "" || description.value == "" || dueDate.value == ""){
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
      priority = "3";
      refreshProjectList();
      addProjectModal.style.display = "none";
    }
  })

})();

export default displayController;