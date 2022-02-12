import { Template } from 'meteor/templating';

import './helpers'; // define app
// import '../imports/network/client.js';
import '../imports/classes/menu.js';

import './registerHelpers';
import './text';
import './menu';
import './debug';
import './scene.html';

Template.scene.onCreated(function() {
  this.subscribe('players');
});

Template.scene.helpers({
  players() {
    return Meteor.users.find({ position: { $exists: true } });
  },
});

Template.scene.events({
});
