import createToDoItem from "./todo-item";
import createProject from "./project-item";
import createApp from "./app-item";

import "./style.css";

function getUserControls() {
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
    const project = getProject(projectIndex);
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

// user can create a project or todo item, user can select which project it goes in

function createUI() {
  const userControls = getUserControls();

  // Create Header UI
  const projectsH1 = document.createElement("h1");
  projectsH1.textContent = "My Projects:";

  const projectsDiv = document.createElement("div");
  projectsDiv.className = "projects";

  const createProjectBtn = document.createElement("button");
  createProjectBtn.id = "create-project-btn";
  createProjectBtn.textContent = "Create Project";

  const elements = [projectsH1, projectsDiv, createProjectBtn];
  elements.forEach((element) => {
    document.body.appendChild(element);
  });

  // Create Default Project
  userControls.addProject("Default", []);
  userControls.addTodoItem(
    0,
    "Test #1",
    "A test todo-item",
    "1/1/2022",
    false,
    "high",
    "do l"
  );

  function regenerateProjectsDiv() {
    projectsDiv.innerHTML = "";
    const projects = userControls.getProjects();

    projects.forEach((project) => {
      const projectContent = document.createElement("div");

      const projectTitleH1 = document.createElement("h1");
      projectTitleH1.textContent = project.getTitle();

      const todos = project.getTodoItems();
      const todoElements = todos.map((todo) => {
        const todoElement = document.createElement("div");

        const todoTitleH2 = document.createElement("h2");
        todoTitleH2.textContent = todo.getTitle();
        todoElement.appendChild(todoTitleH2);

        const todoDueDate = document.createElement("p");
        todoDueDate.textContent = todo.getDueDate();
        todoElement.appendChild(todoDueDate);

        todoElement.addEventListener("click", () => {
          todo.toggleIsComplete();
          console.log(todo.getIsComplete());
        });

        return todoElement;
      });

      const elements = [projectTitleH1, ...todoElements];
      elements.forEach((element) => {
        projectContent.appendChild(element);
      });

      projectsDiv.appendChild(projectContent);
    });
  }

  function createProjectForm() {
    // Create elements for form
    const modalDiv = document.createElement("div");
    modalDiv.style.display = "none";
    modalDiv.className = "modal";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title...";
    titleInput.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    const elements = [titleLabel, titleInput, submitBtn];

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    elements.forEach((element) => {
      modalContent.appendChild(element);
    });

    modalDiv.appendChild(modalContent);

    // Create functions for outside access
    const toggleModal = () => {
      modalDiv.style.display =
        modalDiv.style.display == "none" ? "flex" : "none";
    };

    submitBtn.addEventListener("click", () => {
      if (titleInput.value !== "") {
        userControls.addProject(titleInput.value, []);
        titleInput.value = "";
        modalDiv.style.display = "none";
      }
      regenerateProjectsDiv();
    });

    document.body.appendChild(modalDiv);

    return { toggleModal };
  }

  const projectForm = createProjectForm();

  createProjectBtn.addEventListener("click", () => {
    projectForm.toggleModal();
  });

  // Create Todo Items
}

createUI();
