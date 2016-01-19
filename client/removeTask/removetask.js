Template.removeTask.events({
  'click .submit': function(event, template) {
    let form = template.find(".application-forms");
    event.preventDefault();
    let taskName = template.find("#remove-task-task-name").value;
    let userId = Meteor.userId();
    let removeTask = template.find(".remove-task-main");
    
    //Find the project id then push to the array
    let project = Projects.findOne({_id:Session.get("projectId")}, {fields: {"tasks.name":1, "tasks.description":1}});
    Array.prototype.forEach.call(project.tasks, function(element){
      console.log(element);
    });
    Projects.update({_id:Session.get("projectId")}, {$pull: {tasks: {name:taskName}}}, function(error, documents) {
      if(error)
        console.log(error);
      else
        console.log("Successfully updated:" + documents);
    });
    removeTask.style.display = "none";
    form.reset();
    let notificationText = "Task: " + taskName + " has been removed.";
    let notification = {
      projectId:Session.get("projectId"),
      taskName: taskName,
      notificationText: notificationText
    };
    Notifications.insert(notification);
    showNotifications();
  }
});