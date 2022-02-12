import { Template } from 'meteor/templating';
import './menu.html';

Template.menu.onCreated(function() {});

Template.menu.onRendered(function() {});

Template.menu.helpers({});

Template.menu.events({
  'click #menu'() {
    log('menu clicked');
  },
  'click #resetpos'() {
    const rig = document.getElementById('rig');
    rig.object3D.position.set(0, 1.7, 0);
    rig.object3D.rotation.set(0, 0, 0);
    Meteor.call('updatePlayer', { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, head: { rotation: { x: 0, y: 0, z: 0 } } });
  },
});
