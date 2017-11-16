function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const rmvToDoForm = document.getElementById('rmvToDoForm');
<<<<<<< HEAD
  function removeItem(){
    var child = document.toDoList.querySelector('option:checked');
    var parent = document.toDoList;
    parent.removeChild(child);
  };
=======
  const toggledList = document.querySelectorAll('');

>>>>>>> 5c9e83d
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
<<<<<<< HEAD
    removeItem();
=======
>>>>>>> 5c9e83d
  });
};
window.onload = function() {
  onReady();
};
