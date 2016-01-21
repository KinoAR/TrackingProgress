Meteor.startup(function(){
  Session.setDefault("projectName", null);
  Session.setDefault("projectId", null);
  Session.setDefault("taskComplete", false);
  Session.setDefault("userInput", null);
  Session.setDefault("drawerOpen", false);
});
/* Notifications Settings */
Bert.defaults.hideDelay = 4500;

/* Client Side JS methods */
function showNotifications () { 
  let messageBoard = document.getElementById("message-board");
  messageBoard.className = "row message-board-main slide-in";
  Session.set("drawerOpen", true);
}

function notificationTaskChange(taskName) {
  let user = Meteor.user().username;
  let timeStamp = moment().format("MM/DD/YYYY hh:mm");
  let timeStampText =  "\n At: " + timeStamp;
  let notificationText = user + " marked task: " +  '"' + taskName + '"' + Session.get("taskComplete");
  notificationText = notificationText.replace(/true/, " as complete.");
  notificationText = notificationText.replace(/false/, " as incomplete.");
  let notification = {
    projectId:Session.get("projectId"),
    taskName: taskName,
    timeStamp: Date.now(),
    notificationText: notificationText
  };

  Notifications.insert(notification);
  Bert.alert({
    title: "Task Updated",
    message: notificationText + timeStampText, 
    type:"task-update",
    style:"growl-top-right",
    icon: "fa-pencil-square-o"
  });
}

function notificationTaskRemove(taskName) {
  let user = Meteor.user().username;
  let timeStamp = moment().format("MM/DD/YYYY hh:mm");
  let timeStampText =  "\n At: " + timeStamp;
  let notificationText = user + " removed task:" + '"' + taskName + '".';
  let notification = {
    projectId:Session.get("projectId"),
    taskName: taskName,
    timeStamp: Date.now(),
    notificationText: notificationText
  };
  Bert.alert({
    title: "Task Removed",
    message: notificationText + timeStampText, 
    type:"danger",
    style:"growl-top-right",
    icon: "fa-times"
  });
  Notifications.insert(notification);
}

function notificationsTaskAdd(taskName) {
  let user = Meteor.user().username;
  let timeStamp = moment().format("MM/DD/YYYY hh:mm");
  let timeStampText =  "\n At: " + timeStamp;
  let notificationText = user + " added task:" + '"' + taskName + '".';
  let notification = {
    projectId:Session.get("projectId"),
    taskName: taskName,
    timeStamp: Date.now(),
    notificationText: notificationText
  };
  Bert.alert({
    title: "Task Added",
    message: notificationText + timeStampText, 
    type:"info",
    style:"growl-top-right",
    icon: "fa-plus"
  });
  Notifications.insert(notification);
}
function updateTaskButtons(percentage) {
  let taskButtons = document.getElementsByClassName("app-task-block-button");
  Array.prototype.forEach.call(taskButtons, function(element) {
    element.style.width = percentage;
  });
}