Template.application.onRendered(function(){
  Session.setDefault("projectName", null);
  console.log(Session.get("projectName"));
});
Template.application.events({
  'click #application-add-project' : function(event, template) {
    event.preventDefault();
    //Open up Prompt to create Project
    let addProject = template.find(".add-project-main");
    addProject.style.display = "block";
  },
  'click .application-project-button' : function(event, template) {
    event.preventDefault();
    //Get the value of the button
    clickedElement = event.currentTarget;
    console.log(clickedElement.value);
    Session.set("projectName", clickedElement.value);
  }
});

Template.application.helpers({
  'currentProjects' : function() {
    //Return Projects this user is attached to
    let currentUserId = Meteor.userId();
    let projects = Projects.find({projectCreator:currentUserId});
    return projects;
  },
  'currentProject': function() {
    let currentProjectName = Session.get("projectName");
    let project = Projects.findOne({name: currentProjectName});
    return project;
  }
});