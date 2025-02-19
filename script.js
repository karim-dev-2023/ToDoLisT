document.addEventListener("DOMContentLoaded", () => {
  let arrayToDolist = [];
  const addBtn = document.getElementById("addBtn");
  const doToSection = document.getElementById("doToSection");

  addBtn.addEventListener("click", () => {
    const nameTask = window.prompt("Please enter the name of task :");
    addTasks(nameTask);
    showTasks();
    localStorage.setItem("doToListTask", JSON.stringify(arrayToDolist));
  });

  // Utilisation de l'event delegation sur doToSection
  doToSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const taskToDelete = event.target.getAttribute("data-value");
      arrayToDolist = arrayToDolist.filter(task => task !== taskToDelete);
      localStorage.setItem("doToListTask", JSON.stringify(arrayToDolist));
      showTasks();
    }
  });

  /**
   * Le traitement d'ajout des taches sur l'array
   */
  function addTasks(nameTask) {
    if (nameTask) {
      arrayToDolist.push(nameTask);
    } else {
      window.alert("You didn't get anything");
    }
  }

  /**
   * On affiche nos différents tache
   */
  function showTasks() {
    doToSection.innerHTML = ""; // On nettoie avant d'afficher
    const article = document.createElement("article");
    // On ajoute les classe de Boostrap
    article.classList.add("d-flex", "m-auto", "gap-5","flex-column");

    for (let taskName of arrayToDolist) {
      let taskElement = document.createElement("p");
      let buttonElement = document.createElement("button");

      buttonElement.innerHTML = "X";
      buttonElement.classList.add("delete-btn","btn","btn-danger","btn-sm"); // Nouvelle classe au lieu d'un ID
      buttonElement.setAttribute("data-value", taskName);

      taskElement.textContent = taskName;
      article.appendChild(buttonElement);
      article.appendChild(taskElement);
    }

    doToSection.appendChild(article);
  }

  /**
   * Si le localSorage n'est pas vide alors on récupère les données trouvé dans le localstorage
   * et on réinsere sur notre tableau
   */
  if (localStorage.getItem("doToListTask")) {
    let localStockage = JSON.parse(localStorage.getItem("doToListTask"));
    arrayToDolist = arrayToDolist.concat(localStockage);
  }

  showTasks();
});
