import { Template } from 'meteor/templating';

import './helpers'; // define app
// import '../imports/network/client.js';
import '../imports/classes/menu.js';

import './registerHelpers';
import './text';
import './menu';
import './debug';
import './scene.html';

Template.scene.onCreated(() => {
});

Template.scene.helpers({
});

Template.scene.events({
});
