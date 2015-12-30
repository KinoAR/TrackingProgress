Template.signup.events({
  'click .submit': function(event, template) {
    event.preventDefault();
    let username = template.find("#signupUsername").value;
    let email = template.find("#signupEmail").value;
    let password = template.find("#signupPassword").value;
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