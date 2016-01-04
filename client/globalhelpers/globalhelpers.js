Template.registerHelper('formatDate', function(date) {
  var setDate = null;
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