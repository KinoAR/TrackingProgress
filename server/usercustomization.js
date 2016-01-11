Accounts.onCreateUser(function(options, user) {
  //Add new fields to the user on creation
  user.projects = [];
  user.completedProjects = [];
  user.deletedProjects = [];
  if(options.profile)
    user.profile = options.profile;
  return user;    
})