Template.Navbar.events({
  'click .btn-logout'(event, instance){
      AccountsTemplates.logout();
  }
});

Template.NavbarChirkut.events({
  'click .btn-logout'(event, instance){
      AccountsTemplates.logout();
  }
});

Template.NavbarPeople.events({
  'click .btn-logout'(event, instance){
      AccountsTemplates.logout();
  }
});

Template.Navbar.helpers({
  profile(){
      Meteor.subscribe('users');        
      return Meteor.users.findOne({_id: Meteor.user()._id});
    }
});

Template.NavbarPeople.helpers({
  profile(){
      Meteor.subscribe('users');        
      return Meteor.users.findOne({_id: Meteor.user()._id});
    }
});

Template.NavbarChirkut.helpers({
  profile(){
      Meteor.subscribe('users');        
      return Meteor.users.findOne({_id: Meteor.user()._id});
    }
});