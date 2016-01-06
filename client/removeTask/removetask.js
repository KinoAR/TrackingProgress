Template.removeTask.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let taskName = template.find("#remove-task-task-name").value;
    let userId = Meteor.userId();
    let removeTask = template.find(".remove-task-main");
    
    //Find the project id then push to the array
    let project = Projects.findOne({"tasks.name":taskName}, {fields: {_id: 1} });
    Projects.update({_id:project._id}, {$pull: {tasks: {name:taskName}}}, function(error, documents) {
      if(error)
        console.log(error);
      else
        console.log("Successfully updated:" + project.name + "" +documents);
    });
    removeTask.style.display = "none";
  }
});