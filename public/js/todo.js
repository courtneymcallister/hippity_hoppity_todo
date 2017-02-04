//factory Function
function createTodo(task, date, category){
  var todo = {};
  todo.task = task;
  todo.date = date;
  todo.category = category;
  return todo;
};
