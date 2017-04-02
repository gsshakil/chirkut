var exposed = FlowRouter.group ({});
var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'signin') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('signin');
      }
    }
  ]
});

FlowRouter.notFound = {
    name: 'notFound',
    action() {
        BlazeLayout.render('layout', { top: "Navbar", main: "NotFound", bottom: "Footer" });
    }
}

exposed.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout', { top: "Navbar", main: "Home", bottom: "Footer"  });
    }
});

exposed.route('/people', {
    name: 'people',
    action() {
        BlazeLayout.render('layout', { top: "NavbarPeople", main: "People" , bottom: "Footer" });
    }
});

exposed.route('/people/:username', {
    name: 'peopleDetails',
    action() {
        BlazeLayout.render('layout', { top: "Navbar", main: "PeopleDetails" , bottom: "Footer" });
    }
});

loggedIn.route('/edit-profile', {
    name: 'edit-profile',
    action(params, queryParams) {
        BlazeLayout.render('layout', { top: "Navbar", main: "EditProfile" , bottom: "Footer" });
    }
});

exposed.route('/chirkuts', {
    name: 'chirkuts',
    action() {
        BlazeLayout.render('layout', { top: "NavbarChirkut", main: "Chirkuts" , bottom: "Footer" });
    }
});

exposed.route('/chirkut-details', {
    name: 'chirkutDetails',
    action() {
        BlazeLayout.render('layout', { top: "Navbar", main: "ChirkutDetails", bottom: "Footer" });
    }
});

exposed.route('/chirkut-add', {
    name: 'chirkutAdd',
    action() {
        BlazeLayout.render('layout', { top: "Navbar", main: "ChirkutAdd", bottom: "Footer" });
    }
});


