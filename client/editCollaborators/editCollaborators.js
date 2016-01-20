Template.editCollaborators.events({
  'keyup #edit-collaborators-username': function(event){
    let text = event.target.value;
    Session.set("userInput", text)
  },
  'click .add-collaborator-button': function(event, template) {
    event.preventDefault();
    let clickedElement = event.target;
    let usernameField = template.find("#edit-collaborators-username");
    let collaboratorInfo = Meteor.users.findOne({username: clickedElement.value}, {fields: {username:1}});
    let collaborator = {
      userId: collaboratorInfo._id,
      username:clickedElement.value
    };
    
    Projects.update({_id:Session.get("projectId")}, {$addToSet: {collaborators:collaborator}});
    Session.set("userInput", null);
    usernameField.value = "";
  },
  'click .remove-collaborator-button': function(event) {
    event.preventDefault();
    let clickedElement = event.target;
    Projects.update({_id:Session.get("projectId")}, {$pull: {collaborators:{name:clickedElement.value}}});
  },
  
});

Template.editCollaborators.helpers({
  'collaborators': function() {
    let search = Session.get("userInput");
    let regexp = new RegExp("^"+ search + ".*",'i');
    let collaborators = Meteor.users.find({username: {$regex: regexp }}, {fields: {username:1}});
    
    return collaborators;
  },
  'currentCollaborators': function() {
    let project = Projects.findOne({name:Session.get("projectName")}, {fields:{collaborators:1}});
    if(project !== undefined)
      return project.collaborators;
  }
});