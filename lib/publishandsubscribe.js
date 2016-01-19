if(Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {password:0}});
  });
  Meteor.publish('projects', function() {
    return Projects.find({});
  });
  Meteor.publish('notifications', function() {
    return Notifications.find({});
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('users');
  Meteor.subscribe('projects');
  Meteor.subscribe('notifications');
}