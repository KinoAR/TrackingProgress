Template.closeForm.events({
  'click .close-form': function(event, template){
    event.preventDefault();
    event.stopPropagation();
    let forms = document.getElementsByClassName("application-forms");
    let clickedElement = event.target;
    clickedElement.parentNode.style.display = "none";
    Array.prototype.forEach.call(forms,(function(element){
      element.reset();
      Session.set("userInput", null);
    }));
  }
});