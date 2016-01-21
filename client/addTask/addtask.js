Template.addTask.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let form = template.find(".application-forms");
    let taskName = template.find("#add-task-task-name").value;
    let taskDescription = template.find("#add-task-task-description").value;
    let userId = Meteor.userId();
    let addTask = template.find(".add-task-main");
    //Create task and push it to the user's project tasks array
    let task = {
      name: taskName,
      description: taskDescription,
      complete: false,
    };
    //Find the project id then push to the array
    let project = Projects.findOne({name:Session.get("projectName")}, {fields: {_id: 1} });
    Projects.update({_id:project._id}, {$push: {tasks: task}});
    addTask.style.display = "none";
    form.reset();
    notificationsTaskAdd(taskName);
  }
});