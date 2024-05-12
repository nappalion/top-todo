import createToDoItem from "./todo-item";
import createProject from "./project-item";
import createApp from "./app-item";

import "./style.css";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function writeLocalStorage(projects) {
  localStorage.clear();

  const projectsForJSON = {};
  for (const project of projects) {
    const projectTodosForJSON = project.getTodoItems().map((todo) => ({
      title: todo.getTitle(),
      description: todo.getDescription(),
      dueDate: todo.getDueDate(),
      isComplete: todo.getIsComplete(),
      priority: todo.getPriority(),
      notes: todo.getNotes(),
    }));
    projectsForJSON[project.getTitle()] = projectTodosForJSON;
  }

  localStorage.setItem("projects", JSON.stringify(projectsForJSON));
}

// projects {
// 0: title, array of todos
// 1: title, array of todos...
// }

function readLocalStorage() {
  const projectsJSON = localStorage.getItem("projects");

  console.log(projectsJSON);
  if (projectsJSON) {
    const projectsData = JSON.parse(projectsJSON);
    const projects = [];

    // Iterate over each project data in the parsed JSON
    let index = 0;
    for (const projectTitle in projectsData) {
      if (projectsData.hasOwnProperty(projectTitle)) {
        const projectTodosData = projectsData[projectTitle];
        const todos = projectTodosData.map((todoData) => {
          return createToDoItem(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.isComplete,
            todoData.priority,
            todoData.notes
          );
        });
        const project = createProject(projectTitle, todos);
        project.setIndex(index);
        index += 1;
        projects.push(project);
      }
    }

    return projects;
  } else {
    // If no projects data found in local storage, return an empty array
    return [];
  }
}

if (storageAvailable("localStorage")) {
  readLocalStorage();
} else {
  console.log("ERROR: no local storage.");
}

function getUserControls() {
  const app = createApp(readLocalStorage());

  // Project Interaction
  const getProjects = () => app.getProjects();

  const getProject = (index) => app.getProject(index);

  const addProject = (title, todos) => {
    app.addProject(createProject(title, todos));
  };

  const removeProject = (index) => {
    app.removeProject(index);
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
    const project = app.getProject(projectIndex);
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

  const elements = [projectsH1, createProjectBtn, projectsDiv];
  elements.forEach((element) => {
    document.body.appendChild(element);
  });

  // Create Default Project
  // userControls.addProject("Default", []);
  // userControls.addTodoItem(
  //   0,
  //   "Test #1",
  //   "A test todo-item",
  //   "1/1/2022",
  //   false,
  //   "high",
  //   "do l"
  // );

  function createProjectForm() {
    let currProjectIndex = -1;
    let newProject = true;

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

    const setFields = (newProjectIndex, title) => {
      currProjectIndex = newProjectIndex;
      titleInput.value = title;
      newProject = false;
    };

    // Create functions for outside access
    const toggleModal = () => {
      modalDiv.style.display =
        modalDiv.style.display == "none" ? "flex" : "none";
    };

    submitBtn.addEventListener("click", () => {
      if (titleInput.value !== "" && newProject) {
        userControls.addProject(titleInput.value, []);
      } else if (titleInput.value !== "value" && !newProject) {
        const project = userControls.getProject(currProjectIndex);
        project.setTitle(titleInput.value);
      }
      titleInput.value = "";
      modalDiv.style.display = "none";
      currProjectIndex = -1;
      newProject = true;
      regenerateProjectsDiv();
    });

    document.body.appendChild(modalDiv);

    return { toggleModal, setFields };
  }

  function createTodoItemForm() {
    let currProjectIndex = -1;
    let currTodoIndex = -1;
    let newTodo = true;

    // Create elements for form
    const modalDiv = document.createElement("div");
    modalDiv.style.display = "none";
    modalDiv.className = "modal";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title...";
    titleInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Enter description...";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Title: ";
    const dueDateInput = document.createElement("input");
    dueDateInput.placeholder = "Enter due date...";

    const isCompleteLabel = document.createElement("label");
    isCompleteLabel.textContent = "Is Complete: ";
    const isCompleteInput = document.createElement("input");
    isCompleteInput.type = "checkbox";
    isCompleteInput.checked = true;

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    const priorityInput = document.createElement("input");
    priorityInput.placeholder = "Enter priority...";

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes: ";
    const notesInput = document.createElement("input");
    notesInput.placeholder = "Enter notes...";

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    const elements = [
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionInput,
      dueDateLabel,
      dueDateInput,
      isCompleteLabel,
      isCompleteInput,
      priorityLabel,
      priorityInput,
      notesLabel,
      notesInput,
      submitBtn,
    ];

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    elements.forEach((element) => {
      modalContent.appendChild(element);
    });

    modalDiv.appendChild(modalContent);

    const setFields = (
      newCurrTodoIndex,
      title,
      description,
      dueDate,
      isComplete,
      priority,
      notes
    ) => {
      newTodo = false;
      currTodoIndex = newCurrTodoIndex;
      titleInput.value = title;
      descriptionInput.value = description;
      dueDateInput.value = dueDate;
      isCompleteInput.checked = isComplete;
      priorityInput.value = priority;
      notesInput.value = notes;
    };

    // Create functions for outside access
    const toggleModal = () => {
      modalDiv.style.display =
        modalDiv.style.display == "none" ? "flex" : "none";
    };

    const setProjectIndex = (newIndex) => {
      currProjectIndex = newIndex;
    };

    const inputs = [
      titleInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      notesInput,
    ];

    submitBtn.addEventListener("click", () => {
      if (titleInput.value !== "" && newTodo) {
        userControls.addTodoItem(
          currProjectIndex,
          titleInput.value,
          descriptionInput.value,
          dueDateInput.value,
          isCompleteInput.checked,
          priorityInput.value,
          notesInput.value
        );
      } else if (!newTodo) {
        const todoItem = userControls.getTodoItem(
          currProjectIndex,
          currTodoIndex
        );
        todoItem.setTitle(titleInput.value);
        todoItem.setDescription(descriptionInput.value);
        todoItem.setDueDate(dueDateInput.value);
        todoItem.setIsComplete(isCompleteInput.checked);
        todoItem.setPriority(priorityInput.value);
        todoItem.setNotes(notesInput.value);
      }
      newTodo = true;
      inputs.forEach((input) => (input.value = ""));
      modalDiv.style.display = "none";
      currProjectIndex = -1;
      currTodoIndex = -1;
      regenerateProjectsDiv();
    });

    document.body.appendChild(modalDiv);

    return { setProjectIndex, toggleModal, setFields };
  }

  const projectForm = createProjectForm();
  const todoItemForm = createTodoItemForm();

  createProjectBtn.addEventListener("click", () => {
    projectForm.toggleModal();
  });

  function regenerateProjectsDiv() {
    projectsDiv.innerHTML = "";
    const projects = userControls.getProjects();

    projects.forEach((project) => {
      const projectContent = document.createElement("div");
      projectContent.className = "project-div";

      const projectTitleH1 = document.createElement("h1");
      projectTitleH1.textContent = project.getTitle();

      const createTodoItemBtn = document.createElement("button");
      createTodoItemBtn.addEventListener("click", () => {
        todoItemForm.setProjectIndex(project.getIndex());
        console.log(project.getIndex());
        todoItemForm.toggleModal();
      });
      createTodoItemBtn.textContent = "Create To-Do";

      const editProjectBtn = document.createElement("button");
      editProjectBtn.addEventListener("click", () => {
        projectForm.setFields(project.getIndex(), project.getTitle());
        projectForm.toggleModal();
      });
      editProjectBtn.textContent = "Edit Project";

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.addEventListener("click", () => {
        userControls.removeProject(project.getIndex());
        regenerateProjectsDiv();
      });
      deleteProjectBtn.textContent = "Delete Project";

      const todos = project.getTodoItems();
      const todoElements = todos.map((todo) => {
        const todoElement = document.createElement("div");
        todoElement.className = "todo-div";

        const todoTitleH2 = document.createElement("h2");
        todoTitleH2.textContent = todo.getTitle();
        todoElement.appendChild(todoTitleH2);

        const todoDueDate = document.createElement("p");
        todoDueDate.textContent = todo.getDueDate();
        todoElement.appendChild(todoDueDate);

        const todoIsComplete = document.createElement("input");
        todoIsComplete.type = "checkbox";
        todoIsComplete.checked = todo.getIsComplete();

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.addEventListener("click", () => {
          userControls.removeTodoItem(project.getIndex(), todo.getIndex());
          regenerateProjectsDiv();
        });
        deleteTodoBtn.textContent = "Delete Todo";

        const editTodoBtn = document.createElement("button");
        editTodoBtn.textContent = "Edit Todo";

        const elements = [
          todoTitleH2,
          todoDueDate,
          todoIsComplete,
          editTodoBtn,
          deleteTodoBtn,
        ];
        elements.forEach((element) => {
          todoElement.appendChild(element);
        });

        todoIsComplete.addEventListener("click", () => {
          todo.toggleIsComplete();
          todoIsComplete.checked = todo.getIsComplete();
          console.log(todo.getIsComplete());
        });

        editTodoBtn.addEventListener("click", () => {
          todoItemForm.setProjectIndex(project.getIndex());
          todoItemForm.setFields(
            todo.getIndex(),
            todo.getTitle(),
            todo.getDescription(),
            todo.getDueDate(),
            todo.getIsComplete(),
            todo.getPriority(),
            todo.getNotes()
          );
          todoItemForm.toggleModal();
        });

        return todoElement;
      });

      const elements = [
        projectTitleH1,
        createTodoItemBtn,
        editProjectBtn,
        deleteProjectBtn,
        ...todoElements,
      ];
      elements.forEach((element) => {
        projectContent.appendChild(element);
      });

      projectsDiv.appendChild(projectContent);
    });
  }

  regenerateProjectsDiv();
  // Create Todo Items

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    const projects = userControls.getProjects();
    writeLocalStorage(projects);
  });
}

createUI();
