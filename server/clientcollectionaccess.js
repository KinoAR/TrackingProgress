/* Client Collection Access Rights */
Meteor.users.allow({
  update: function () {
    return true;
  },
  remove: function() {
    return true;
  }
});

Projects.allow({
  insert: function(userId, doc) {
    return (userId && doc.projectCreator === userId);
  },
  update: function(userId, doc) {
    if(userId === doc.projectCreator || doc.collaborators.some(function(element) {
        return element.userId === userId;
      })) {
      return true;
    }
  },
  remove: function(userId, doc) {
    return (userId && doc.projectCreator === userId);
  }
});

Notifications.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});