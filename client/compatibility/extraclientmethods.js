Meteor.startup(function(){
  Session.setDefault("projectName", null);
  Session.setDefault("projectId", null);
  Session.setDefault("taskComplete", false);
  Session.setDefault("userInput", null);
  Session.setDefault("drawerOpen", false);
  Session.setDefault("notificationText", null);
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
    timeStampText: timeStampText,
    notificationText: notificationText
  };
  Notifications.insert(notification);
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
    timeStampText:timeStampText,
    notificationText: notificationText
  };
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
    timeStampText:timeStampText,
    notificationText: notificationText
  };
  Notifications.insert(notification);
}

function notificationAddPartner(partner){
  let user = Meteor.user().username;
  let timeStamp = moment().format("MM/DD/YYYY hh:mm");
  let timeStampText =  "\n At: " + timeStamp;
  let notificationText = user + " has added " + partner + " as a partner";
  let notification = {
    projectId:Session.get("projectId"),
    parterName:partner,
    timeStamp: Date.now(),
    timeStampText:timeStampText,
    notificationText: notificationText
  };
  Notifications.insert(notification);
}

function notificationRemovePartner(partner){
  let user = Meteor.user().username;
  let timeStamp = moment().format("MM/DD/YYYY hh:mm");
  let timeStampText =  "\n At: " + timeStamp;
  let notificationText = user + " has removed " + partner + " as a partner";
  let notification = {
    projectId:Session.get("projectId"),
    partnerName: partner,
    timeStamp: Date.now(),
    timeStampText:timeStampText,
    notificationText: notificationText
  };
  Notifications.insert(notification);
}
function updateTaskButtons(percentage) {
  let taskButtons = document.getElementsByClassName("app-task-block-button");
  Array.prototype.forEach.call(taskButtons, function(element) {
    element.style.width = percentage;
  });
}