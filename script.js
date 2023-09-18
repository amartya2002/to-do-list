window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

    const buttonBusiness = document.getElementById("radioBusiness");
    const buttonPersonal = document.getElementById("radioPersonal");
   
    buttonBusiness.addEventListener('click', e =>{
        // Select the input tag of type radio having the Id 'business'
        const business = document.getElementById("business");

        business.click();
    })
   
    buttonPersonal.addEventListener('click', e =>{
        // Select the input tag of type radio having the Id 'personal'
        const business = document.getElementById("personal");

        personal.click();
    })

    newTodoForm.addEventListener('submit', e =>{
        e.preventDefault(); // Prevent the default behaviour of the 'submit' behaviour

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset(); // Reset the form

        displayTodos();
    })

    
   
})

// function DisplayTodos() {
//     const todoList = document.querySelector('#todo-list');
//     todoList.innerHTML = "";

//     todos.forEach(todo => {
//         const todoItem = document.createElement('div');
        
//     })
// }
