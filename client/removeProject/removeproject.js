Template.removeProject.events({
  'click .submit': function(event, template) {
    let form = template.find(".application-forms");
    event.preventDefault();
    let projectName = template.find("#remove-project-project-name").value;
    let userId = Meteor.userId();
    let removeProject = template.find(".remove-project-main");
    
    //Find the project id then push to the array
    let project = Projects.findOne({name:projectName}, {fields: {_id: 1, projectCreator: 1, collaborators:1} });
    //Check if project Creator matches userId
    if(project.projectCreator === userId) {
      Projects.remove({_id:project._id}, function(error) {
        if(error)
          console.log(error);
        else
          console.log("Successfully removed:" + projectName);
      });
    }
    else {
      if(Array.prototype.some.call(project.collaborators, function(element) {
        return element.userId === userId;
      })) {
        Projects.update({_id:Session.get("projectId")}, {$pull: {collaborators:{userId:userId}}});
        notificationRemovePartner(Meteor.user.username);
      }
    }
    removeProject.style.display = "none";
    form.reset();
  }
});