if(Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({}, {fields: {password:0}});
  })
}

if(Meteor.isClient) {
  Meteor.subscribe('users');
}