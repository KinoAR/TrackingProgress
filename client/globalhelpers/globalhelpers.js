Template.registerHelper('formatDate', function(date) {
  let setDate = null;
  if(date == null)
    setDate = moment();
  else
    setDate = moment(date, "MM/DD/YYYY");
  return   setDate.format("MM/DD/YYYY");
});

Template.registerHelper('deadlineDate', function() {
 
  if(this == null)
   console.log("Unable to set date");
  else {
    let date = String(this.deadline);
    setDate = moment(date, "YYYY-MM-DD");
  }
  return   setDate.format("MM/DD/YYYY");
});
/* Handles alerts across users */
Template.registerHelper('notifications', function(){
let query = Notifications.find({projectId:Session.get("projectId")});
let handle = query.observeChanges({
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
    else if(notification.notificationText.search(/has removed/) > -1) {
      Bert.alert({
        title: "Partner Removed",
        message: notification.notificationText + notification.timeStampText, 
        type:"danger",
        style:"growl-top-right",
        icon: "fa-times"
      });
    }
    else if(notification.notificationText.search(/has added/) > -1) {
        Bert.alert({
        title: "Partner Added",
        message: notification.notificationText + notification.timeStampText, 
        type:"success",
        style:"growl-top-right",
        icon: "fa-plus"
      });
    }
  }
});
});