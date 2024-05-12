function createToDoItem(
  title,
  description = "",
  dueDate = "",
  isComplete = false,
  priority = "",
  notes = ""
) {
  let index = -1;

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

  const setIsComplete = (newIsComplete) => {
    isComplete = newIsComplete;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const setNotes = (newNotes) => {
    notes = newNotes;
  };

  const setIndex = (newIndex) => {
    index = newIndex;
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getIsComplete = () => isComplete;
  const getPriority = () => priority;
  const getNotes = () => notes;
  const getIndex = () => index;

  return {
    setTitle,
    getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    toggleIsComplete,
    getIsComplete,
    setIsComplete,
    setPriority,
    getPriority,
    setNotes,
    getNotes,
    setIndex,
    getIndex,
  };
}

export default createToDoItem;
