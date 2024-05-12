function createProject(title, todos = []) {
  let index = -1;

  const addTodoItem = (todoItem) => {
    todoItem.setIndex(todos.length);
    todos.push(todoItem);
  };

  const reassignTodoIndices = () => {
    for (let i = 0; i < todos.length; i++) {
      todos[i].setIndex(i);
    }
  };

  const removeTodoItem = (index) => {
    todos.splice(index, 1);
    reassignTodoIndices();
  };

  const setIndex = (newIndex) => {
    index = newIndex;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getIndex = () => index;
  const getTitle = () => title;

  const getTodoItems = () => todos;

  const getTodoItem = (todoIndex) => todos[todoIndex];

  return {
    addTodoItem,
    removeTodoItem,
    setTitle,
    getTitle,
    setIndex,
    getIndex,
    getTodoItems,
    getTodoItem,
  };
}

export default createProject;
