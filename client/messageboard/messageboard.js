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
    let notifications = Notifications.find({projectId:projectId}, {sort: {timeStamp: -1}, limit:5});
    return notifications;
  },
  'formattedTimeStamp': function() {
    let now = this.timeStamp;
    formattedTimeStamp = moment(now).format("MM/DD/YYYY hh:mm");
    return formattedTimeStamp;
  }
});