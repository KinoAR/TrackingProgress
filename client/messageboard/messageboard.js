Template.messageBoard.events({
  'click .close-notifications': function(event, template) {
    let messageBoard = template.find(".message-board-main");
    messageBoard.className ="row message-board-main slide-out";
    Session.set("drawerOpen", false);
  }
});

Template.messageBoard.helpers({
  'projectNotifications': function() {
    let projectId = Session.get("projectId");
    let notifications = Notifications.find({projectId:projectId});
    return notifications;
  }
});