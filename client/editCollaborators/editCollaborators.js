Template.editCollaborators.events({
  'keyup #edit-collaborators-username': function(event){
    text = event.target.value;
    Session.set("userInput", text)
  },
  'click .add-collaborator-button': function(event) {
    event.preventDefault();
    let clickedElement = event.target;

    Projects.update({_id:Session.get("projectId")}, {$addToSet: {collaborators: {name:clickedElement.value}}});
  },
  'click .remove-collaborator-button': function(event) {
    event.preventDefault();
    let clickedElement = event.target;
    Projects.update({_id:Session.get("projectId")}, {$pull: {collaborators:{name:clickedElement.value}}});
  }
});

Template.editCollaborators.helpers({
  'collaborators': function() {
    let search = Session.get("userInput");
    regexp = new RegExp("^"+ search + ".*",'i');
    let collaborators = Meteor.users.find({username: {$regex: regexp }}, {fields: {username:1}});
    return collaborators;
  },
  'currentCollaborators': function() {
    let project = Projects.findOne({name:Session.get("projectName")}, {fields:{collaborators:1}});
    if(project !== undefined)
      return project.collaborators;
  }
});