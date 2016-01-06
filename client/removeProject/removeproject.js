Template.removeProject.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let projectName = template.find("#remove-project-project-name").value;
    let userId = Meteor.userId();
    let removeProject = template.find(".remove-project-main");
    
    //Find the project id then push to the array
    let project = Projects.findOne({name:projectName}, {fields: {_id: 1, projectCreator: 1} });
    //Check if project Creator matches userId
    if(userId == project.projectCreator){
      Projects.remove({_id:project._id}, function(error) {
      if(error)
        console.log(error);
      else
        console.log("Successfully removed:" + projectName);
      });
      removeProject.style.display = "none";
    }   
  }
});