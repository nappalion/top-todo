import createToDoItem from "./todo-item";
import createProject from "./project-item";
import createApp from "./app-item";

function userControls() {
  const app = createApp([]);

  // Project Interaction
  const getProjects = () => app.getProjects();

  const getProject = (index) => app.getProject(index);

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

function createUI() {}
