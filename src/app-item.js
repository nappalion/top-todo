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

  return { addProject, removeProject, getProjects, getProject };
}

export default createApp;
