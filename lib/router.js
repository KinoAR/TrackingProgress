Router.configure({
    layoutTemplate:"layout"
});

Router.route('/', {name:"homepage"});

Router.route('/progressPage', {name:"application"});

Router.route('/messageboard', {name:"messageBoard"});