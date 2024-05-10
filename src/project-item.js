function createProject(title, todos = []) {
  let index = -1;

  const addTodoItem = (todoItem) => {
    todos.push(todoItem);
  };

  const removeTodoItem = (index) => {
    todos.splice(index, 1);
  };

  const setIndex = (newIndex) => {
    index = newIndex;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getIndex = () => index;
  const getTitle = () => title;

  return {
    addTodoItem,
    removeTodoItem,
    setTitle,
    getTitle,
    setIndex,
    getIndex,
  };
}

export default createProject;
