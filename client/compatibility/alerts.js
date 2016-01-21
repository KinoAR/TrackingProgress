/* Handles alerts across users */

var query = Notifications.find({projectId:Session.get("projectId")});
var handle = query.observeChanges({
  added:function(id, notification) {
    if(notification.notificationText.search(/marked/) > -1) {
      Bert.alert({
        title: "Task Updated",
        message: notification.notificationText + notification.timeStampText, 
        type:"task-update",
        style:"growl-top-right",
        icon: "fa-pencil-square-o"
      });
    }
    else if(notification.notificationText.search(/added/) > -1) {
      Bert.alert({
        title: "Task Added",
        message: notification.notificationText + notification.timeStampText, 
        type:"info",
        style:"growl-top-right",
        icon: "fa-plus"
      });
    }
    else if(notification.notificationText.search(/removed/) > -1) {
      Bert.alert({
        title: "Task Removed",
        message: notification.notificationText + notification.timeStampText, 
        type:"danger",
        style:"growl-top-right",
        icon: "fa-times"
      });
    }
  }
});