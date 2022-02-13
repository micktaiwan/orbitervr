import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './helpers'; // define app
// import '../imports/network/client.js';
import '../imports/classes/menu.js';

import './registerHelpers';
import './text';
import './menu';
import './debug';
import './scene.html';

Template.scene.onCreated(function() {
  if (!Meteor.userId()) {
    FlowRouter.go('/');
    return;
  }
  this.subscribe('userData');
  this.subscribe('players');
  this.subscribe('cubes');
});

Template.scene.helpers({
  players() {
    return Meteor.users.find({ 'status.online': true, position: { $exists: true } });
  },
  accounts() {
    return Meteor.users.find({ }, { sort: { createdAt: -1 } });
  },
  cubes() {
    return Cubes.find({});
  },
});

Template.scene.events({
});
