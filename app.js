function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    console.log(toDos)
    newToDoText.value = '';
    renderTheUI();
  }
  function renderTheUI() {
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';
  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button')
    deleteButton.id = toDo.id;
    deleteButton.textContent = "Delete"
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    deleteButton.onclick = function (){
      let parent = this.parentNode;
      let linkedID = this.id;
      for(i = 0; i < toDos.length; i++) {
        if (toDos[i].id == linkedID) {
          delete toDos.splice(i,1);
        }
      }
      this.parentNode.parentNode.removeChild(parent);
    }
  });
}
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}


window.onload = function() {
  onReady();
};
