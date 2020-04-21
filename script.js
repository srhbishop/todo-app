const todoList = document.querySelector('.todo-list');
const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add-todo');

// adds items by clicking "Add"
addBtn.addEventListener('click', addToDo)

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addToDo();
    }
})

function addToDo(){
    
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('todo-item');
    todoList.appendChild(itemDiv);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    itemDiv.appendChild(completedBtn);
    
    const todoItem = document.createElement('li');
    todoItem.textContent = userInput.value;
    itemDiv.appendChild(todoItem);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    itemDiv.appendChild(trashBtn);

    userInput.value = "";

    trashBtn.addEventListener('click', function() {
        itemDiv.remove();
        console.log('removed');
    });

    completedBtn.addEventListener('click', function() {
        itemDiv.classList.toggle('completed');
    })
}







