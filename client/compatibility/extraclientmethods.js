Meteor.startup(function(){
  Session.setDefault("projectName", null);
  Session.setDefault("projectId", null);
  Session.setDefault("taskComplete", false);
  Session.setDefault("userInput", null);
  Session.setDefault("drawerOpen", false);
});

/* Client Side JS methods */
function showNotifications () { 
  let messageBoard = document.getElementById("message-board");
  messageBoard.className = "row message-board-main slide-in";
  Session.set("drawerOpen", true);
}
