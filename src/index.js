function createToDoItem(title, description, dueDate, priority, notes) {
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getTitle = () => title;

  return { setTitle, getTitle, description, dueDate, priority, notes };
}
