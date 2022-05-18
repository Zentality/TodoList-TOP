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


})();

export default displayController;