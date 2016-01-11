Template.signup.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let username = template.find("#signup-username").value;
    let email = template.find("#signup-email").value;
    let password = template.find("#signup-password").value;
    //Create the new user
    let newUser = {
      username: username,
      email: email,
      password: password,
      profile: {
        name: username
      }
    };
    Accounts.createUser(newUser, function(error){
      if(error)
        console.log(error);
      else
        console.log("Successfully create new user");
    });

  }
})