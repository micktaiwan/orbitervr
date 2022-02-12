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
    return Meteor.users.find({ 'status.online': true, position: { $exists: true } }, { sort: { createdAt: -1 } });
  },
  accounts() {
    return Meteor.users.find({ }, { sort: { createdAt: -1 } });
  },
});

Template.scene.events({
});
