Template.navigation.events({
  'click .logout' : function(event, template){
    event.preventDefault();
    Meteor.logout(function(error){
      if(error)
        console.log(error);
      else
        console.log("Logout success");
    })
  }
});