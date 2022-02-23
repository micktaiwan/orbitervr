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
  // this.subscribe('userData');
  this.subscribe('players');
  this.subscribe('cubes');
});

Template.scene.onRendered(function() {
  $('#scene').append('<a-entity position="-5 0 -6" gltf-model="#car" scale="1 1 1"></a-entity>');
  $('#scene').append('<a-entity position="-8 1 -6" gltf-model="#wooden-crate" scale="1 1 1"></a-entity>');
});

Template.scene.helpers({
  players() {
    return Meteor.users.find({ 'status.online': true, position: { $exists: true } });
  },
  accounts() {
    return Meteor.users.find({ }, { sort: { 'status.lastLogin.date': -1 } });
  },
  cubes() {
    return Cubes.find({});
  },
});

Template.scene.events({
});
