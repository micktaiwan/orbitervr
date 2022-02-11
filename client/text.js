import { Template } from 'meteor/templating';
import './text.html';

Template.text.onCreated(() => { });

Template.text.onRendered(() => { });

Template.text.helpers({

  position() {
    return this.position || '0 0 0';
  },

  value() {
    return this.value || '';
  },

  color() {
    return this.color || '#fff';
  },

  scale() {
    return this.scale || '2 2 2';
  },

});

Template.text.events({});
