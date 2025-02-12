const addBtn = document.getElementById("addBtn");
const doToSection = document.getElementById("doToSection");

addBtn.addEventListener("click", () => {
  // Ceci permet de saisir un texte dans un prompt
  const nameTask = window.prompt("Please enter the name of task :");
  if (nameTask != null && nameTask != "") {
    doToSection.innerHTML += `
    <article class="p-2 bg-warning-subtle rounded-pill mb-2 d-flex justify-content-between">
        <div>
        ${nameTask}
        </div>
        <button class="btn btn-sm btn-danger rounded-circle" onclick='alert("OK")'">
        X
        </button>
    </article>`;

    localStorage.setItem("doToListTask", doToSection.innerHTML);
  } else {
    window.alert("You didn't get anything");
  }

  //   console.log(localStorage.getItem("doToListTask"));
});

const localStorageToDoList = localStorage.getItem("doToListTask");

if (localStorageToDoList) {
  doToSection.innerHTML = localStorageToDoList;
}

// Elle permet de supprimer tous ce qui se toruve sur le localstorage
// localStorage.clear();
