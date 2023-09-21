document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('#name');
    const addBtn = document.getElementById('addBtn');
    const view = document.getElementById("view");
    const clearBtn = document.getElementById("clearBtn");
    const deleteModal = document.getElementById("deleteModal");
    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })

    view.addEventListener('click', () => {
        view.classList.add("rotate-on-click");
    })

    const buttonBusiness = document.getElementById("radioBusiness");
    const buttonPersonal = document.getElementById("radioPersonal");

    buttonBusiness.addEventListener('click', e => {
        // Select the input tag of type radio having the Id 'business'
        const business = document.getElementById("business");

        business.click();
    })

    buttonPersonal.addEventListener('click', e => {
        // Select the input tag of type radio having the Id 'personal'
        const business = document.getElementById("personal");

        personal.click();
    })

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.querySelector('#todo-list');

    // DIsplay the Todo List
    function displayTodos() {
        todoList.innerHTML = ` `;

        todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.className = ('flex justify-between mb-4 p-5"');


            if (todo.category == "business") {
                todoItem.innerHTML = `<p class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-200 [#527CAC]">${todo.content}</p>

                <button data-index="${index}" class="px-1.5 h-8 rounded-md bg-red-500 hover:opacity-75 sm:hover:opacity-100 sm:hover:scale-105 duration-200 shadow-xl text-white delete-button">Delete</button>`;
                todoList.appendChild(todoItem);
            } else {
                todoItem.innerHTML = `<p class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">${todo.content}</p>
    
                <button data-index="${index}" class="mb-1 px-1.5 h-8 rounded-md bg-red-500 hover:opacity-75 sm:hover:opacity-100 sm:hover:scale-105 duration-200 shadow-xl text-white delete-button">Delete</button>`;
                todoList.appendChild(todoItem);
            }
        });
        
        updateLocalStorage();
    }

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
      }

    // Submit Todo
    addBtn.addEventListener('submit', e => {
        e.preventDefault(); // Prevent the default behaviour of the 'submit' event

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        if (todo.content.trim() !== '') {
            // const content = todo.content.trim();
            // todoList.classList.remove('hidden');
            todos.push(todo);

            updateLocalStorage();
        }

        e.target.reset(); // Reset the form

        displayTodos();
    })

    // Delete Todo
    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            todos.splice(index, 1);
            displayTodos();
        }
    });

    // if(todos == []){
    //     todoList.classList.add("hidden");
    //     displayTodos();
    // }

    clearBtn.addEventListener('click', () => {
        deleteModal.classList.remove('hidden');
    });

    confirmDeleteBtn.addEventListener('click', () => {
        todos = [];
        displayTodos();
        deleteModal.classList.add('hidden');
    });

    cancelDeleteBtn.addEventListener('click', () => {
        deleteModal.classList.add('hidden');
    });

    displayTodos();
});

