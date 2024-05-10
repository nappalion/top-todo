function createToDoItem(
  title,
  description,
  dueDate,
  isComplete = false,
  priority,
  notes
) {
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const toggleIsComplete = () => {
    isComplete = !isComplete;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const setNotes = (newNotes) => {
    notes = newNotes;
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getIsComplete = () => isComplete;
  const getPriority = () => priority;
  const getNotes = () => notes;

  return {
    setTitle,
    getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    toggleIsComplete,
    getIsComplete,
    setPriority,
    getPriority,
    setNotes,
    getNotes,
  };
}

export default createToDoItem;
