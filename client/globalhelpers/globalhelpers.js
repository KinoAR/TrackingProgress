Template.registerHelper('formatDate', function(date) {
  var setDate = null;
  if(date == null)
    setDate = moment();
  else
    setDate = moment(date, "MM/DD/YYYY");
  return   setDate.format("MM/DD/YYYY");
})