import { Template } from 'meteor/templating';
import './menu.html';

Template.menu.onCreated(function() {});

Template.menu.onRendered(function() {});

Template.menu.helpers({});

Template.menu.events({

  'click #menu'(e, tpl) {
    log('menu clicked');
  },
});
