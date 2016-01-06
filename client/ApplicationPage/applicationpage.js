Template.application.onRendered(function(){
  Session.setDefault("projectName", null);
});
Template.application.events({
  'click #application-add-project' : function(event, template) {
    event.preventDefault();
    //Open up Prompt to create Project
    let addProject = template.find(".add-project-main");
    addProject.style.display = "block";
  },
  'click #application-remove-project' : function(event, template) {
    event.preventDefault();
    //Open prompt to remove project
    let removeProject = template.find(".remove-project-main");
    removeProject.style.display = "block";
  },
  'click .application-project-button' : function(event, template) {
    event.preventDefault();
    //Get the value of the button
    clickedElement = event.currentTarget;
    Session.set("projectName", clickedElement.value);
  },
  'click #application-add-task' : function(event, template) {
    event.preventDefault();
    //Open up prompt to create a task
    let addTask = template.find(".add-task-main");
    addTask.style.display = "block";
  },
  'click #application-remove-task' : function(event, template) {
    event.preventDefault();
    //Open prompt to remove task
    let removeTask = template.find(".remove-task-main");
    removeTask.style.display ="block";
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