Template.addProject.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let form = template.find(".application-forms");
    let projectName = template.find("#add-project-project-name").value;
    let projectDescription = template.find("#add-project-project-description").value;
    let projectDeadline = template.find("#add-project-project-deadline").value;
    let taskName = template.find("#add-project-task-name").value;
    let taskDescription = template.find("#add-project-task-description").value;
    let userId = Meteor.userId();
    let addProject = template.find(".add-project-main");
    //Create project and push it to the user projects array
    let project = {
      projectCreator: userId,
      name: projectName,
      description: projectDescription,
      deadline: projectDeadline,
      collaborators: [],
      complete: false,
      tasks: [{
        name: taskName,
        description: taskDescription,
        complete: false
      }]
    };
    Projects.insert(project);
    addProject.style.display = "none";
    form.reset();
  }
});