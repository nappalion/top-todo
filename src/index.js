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

  const toggleIsComplete = (isComplete) => {
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
    setPriority,
    getPriority,
    setNotes,
    getNotes,
  };
}

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

function createApp(projects = []) {
  const addProject = (project) => {
    projects.push(project);
  };

  const reassignProjectIndices = () => {
    for (let i = 0; i < projects.length; i++) {
      projects[i].setIndex(i);
    }
  };

  const removeProject = (index) => {
    projects.splice(index, 1);
    reassignProjectIndices();
  };

  const getProjects = () => projects;

  const getProject = (index) => projects[index];

  return { addProject, removeProject, getProjects };
}

/*
User can:
view projects
add project
remove project
edit project detais

view todo projects
add todo to project
remove todo from project
edit todo details
*/
function userControls() {
  const app = createApp([]);

  // Project Interaction
  const getProjects = () => app.getProjects();

  const getProject = (index) => app.getProjects(index);

  const addProject = (title, todos) => {
    app.addProject(createProject(title, todos));
  };

  const removeProject = (index) => {
    app.removeProject(removeProject(index));
  };

  // Todo Item Interaction
  const getTodoItems = (projectIndex) =>
    app.getProject(projectIndex).getTodoItems();

  const getTodoItem = (projectIndex, todoIndex) =>
    app.getProject(projectIndex).getTodoItem(todoIndex);

  const addTodoItem = (
    projectIndex,
    title,
    description,
    dueDate,
    isComplete = false,
    priority,
    notes
  ) => {
    const project = app.getProjects(projectIndex);
    project.addTodoItem(
      createToDoItem(title, description, dueDate, isComplete, priority, notes)
    );
  };

  const removeTodoItem = (projectIndex, todoIndex) => {
    const project = app.getProjects(projectIndex);
    project.removeTodoItem(todoIndex);
  };

  return {
    getProjects,
    getProject,
    addProject,
    removeProject,

    getTodoItems,
    getTodoItem,
    addTodoItem,
    removeTodoItem,
  };
}
