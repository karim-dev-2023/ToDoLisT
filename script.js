let arrayToDolist = [];
const addBtn = document.getElementById("addBtn");
const doToSection = document.getElementById("doToSection");

addBtn.addEventListener("click", () => {
  const nameTask = window.prompt("Please enter the name of task :");

  addTasks(nameTask);
  showTasks();

  // // Ceci permet de saisir un texte dans un prompt
  // if (nameTask != null && nameTask != "") {
  //   doToSection.innerHTML += `
  //   <article class="p-2 bg-warning-subtle rounded-pill mb-2 d-flex justify-content-between">
  //       <div>
  //       ${nameTask}
  //       </div>
  //       <button class="btn btn-sm btn-danger rounded-circle" onclick='alert("OK")'">
  //       X
  //       </button>
  //   </article>`;

  //   localStorage.setItem("doToListTask", doToSection.innerHTML);
  // } else {
  //   window.alert("You didn't get anything");
  // }

  // console.log(localStorage.getItem("doToListTask"));
});

const localStorageToDoList = localStorage.getItem("doToListTask");
console.log(localStorageToDoList);

// Elle permet de supprimer tous ce qui se toruve sur le localstorage
// localStorage.clear();

function addTasks(nameTask) {
  doToSection.innerHTML = "";
  if (nameTask) {
    arrayToDolist.push(nameTask);
  } else {
    window.alert("You didn't get anything");
  }
}

function showTasks() {
  // Je créer l'élément article en utilisant le createElement
  var article = document.createElement("article");

  for (let taskName of arrayToDolist) {
    let taskElement = document.createElement("p"); // Crée un élément <p>
    taskElement.textContent = taskName; // Assigne le texte
    article.appendChild(taskElement); // Ajoute l'élément <p> à l'article
  }

  doToSection.appendChild(article); // Ajoute l'article à la section
  localStorage.setItem("doToListTask", arrayToDolist);
}

