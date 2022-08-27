
//prevents default form submission behavior -- no reload upon enter
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


//access the todo list
toDoList = document.querySelector('.to-do-list');

//access todo input field
toDoInput = document.getElementById("add-todo");
//creates new html todo
function newItem(x) {

    //creates new h6 tag
    let header = document.createElement('h6');
    // populates h6 text
    header.innerHTML = x.value;
    //adds id
    header.id = '5';
    //appends to todolist
    return header
}

//adds todo to web page
function addTodo(event) {
    if (event.key === "Enter" && toDoInput.value) {
        let item = newItem(toDoInput);
        toDoList.appendChild(item);
    }
}

//event listener for "enter" press
document.body.addEventListener('keydown', addTodo);

