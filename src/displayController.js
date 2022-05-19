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

  let projectListDom = document.querySelector(".projects>ul");
  let refreshProjectList = () => {
    projectListDom.textContent = "";
    projects.getListOfProjects().forEach((project) => {
      let tempLi = document.createElement("li");
      tempLi.textContent = project.title;
      projectListDom.appendChild(tempLi);
    })
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