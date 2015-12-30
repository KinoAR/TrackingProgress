Template.login.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let username = template.find("#loginUsername").value;
    let email = template.find("#loginEmail").value;
    let password = template.find("#loginPassword").value;
    //Create the new user
    let user = {
      username: username,
      email: email,
      password: password,
    };
    Meteor.loginWithPassword(user.username, user.password, function(error){
      if(error)
        console.log(error);
      else
        console.log("Successfully logged in");
    });
  }
})