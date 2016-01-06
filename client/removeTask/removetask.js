Template.removeTask.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let taskName = template.find("#remove-task-task-name").value;
    let userId = Meteor.userId();
    let removeTask = template.find(".remove-task-main");
    
    //Find the project id then push to the array
    Projects.update({_id:Session.get("projectId")}, {$pull: {tasks: {name:taskName}}}, function(error, documents) {
      if(error)
        console.log(error);
      else
        console.log("Successfully updated:" + project.name + "" +documents);
    });
    removeTask.style.display = "none";
  }
});