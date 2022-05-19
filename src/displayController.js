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
    projects.addProject("Test title", "This is a desc", "date", "High");
    refreshProjectList();
    addProjectModal.style.display = "none";
  })

})();

export default displayController;