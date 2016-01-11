Template.application.onRendered(function(){
  Session.setDefault("projectName", null);
  Session.setDefault("projectId", null);
  Session.setDefault("taskComplete", false);
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
    let project = Projects.findOne({name:Session.get("projectName")}, {fields: {_id:1}});
    Session.set("projectId", project._id);
  },
  'click #application-edit-collaborators': function(event, template) {
    event.preventDefault();
    let editCollaborators = template.find(".edit-collaborators-main");
    editCollaborators.style.display = "block";
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
  },
  'click .task-remove' : function(event, template) {
    event.preventDefault();
    event.stopPropagation();
    let clickedElement = event.target;
    Projects.update({_id:Session.get("projectId")}, 
      {$pull: {tasks: {name:clickedElement.dataset.taskname, description:clickedElement.dataset.taskdescription}}}, 
      function(error, documents) {
        if(error)
          console.log(error);
        else
          console.log("Successfully updated:" + documents);
    });
  },
  'change .taskCheck' : function(event, template) {
    let taskName = this.name;
    let projectId = Session.get("projectId");
    if(event.target.checked) {
      Session.set("taskComplete", true);
      let checked = Session.get("taskComplete");
      Meteor.call('updateTask',projectId, taskName, checked);
    }
    else {
      Session.set("taskComplete", false);
      let checked = Session.get("taskComplete");
      Meteor.call('updateTask',projectId, taskName, checked); 
    }
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
  },
  'progress': function() {
    if(Session.get("projectName") !== null){
    let currentProjectName = Session.get("projectName");
    let count = 0;
    let currentProject = Projects.findOne({name: currentProjectName});
    if(currentProject !== undefined){
       currentProject.tasks.forEach(function(element){ 
      if(element.complete){
       count++;
      }});
      let progress = Math.floor((100 * (count / currentProject.tasks.length)));
      return progress;
    }
    }
  }
});