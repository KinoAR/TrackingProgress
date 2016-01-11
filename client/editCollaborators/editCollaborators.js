Template.editCollaborators.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let form = template.find(".application-forms");
    let editCollaborators = template.find(".edit-collaborators-main")
    let username = template.find("#edit-collaborators-username").value;
    //Create project and push it to the user projects array
    editCollaborators.style.display = "none";
    form.reset();
  }
});