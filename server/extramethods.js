Meteor.methods({
  updateTask: function(id,taskName, checked){
    Projects.update({_id:id, "tasks.name": taskName}, {$set: {"tasks.$.complete": checked}});
  }
});