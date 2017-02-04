var todoApp = {
  todos: [], //data source/store
  init: function(){
    todoApp.cacheDom();
    todoApp.addEventListeners();
    todoApp.render();
  },
  
  cacheDom: function(){
    todoApp.createButton = document.querySelector('#create');
    todoApp.taskInput = document.querySelector('#task');
    todoApp.categoryInput = document.querySelector('#category');
    todoApp.dateInput = document.querySelector('#date');
    todoApp.list = document.querySelector('#list');
  },

  render: function(){
    console.log(todoApp.todos);
    var listItemsFromTodos = todoApp.todos.map(function(todo){
      return `<li>${todo.task}:  (${todo.date})  [${todo.category}]</li>`;
    }).join('');
    todoApp.list.innerHTML = listItemsFromTodos;
  },

  addEventListeners: function() {
    todoApp.createButton.addEventListener('click', todoApp.addTodo);
  },

  addTodo: function(){
    var task = todoApp.taskInput.value;
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category)
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = '';
    todoApp.dateInput.value = '';
    todoApp.categoryInput.value = '';
    todoApp.render();
  }
};

todoApp.init();
// console.log(todoApp);
