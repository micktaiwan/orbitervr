/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

import { Template } from 'meteor/templating';
import './text.html';

Template.text.onCreated(() => { });

Template.text.onRendered(() => { });

Template.text.helpers({

  position() {
    return this.position || '0 0 0';
  },

  value() {
    return this.value || 'default text \n à la ligne';
  },

  color() {
    return this.color || '#fff';
  },

  scale() {
    return this.scale || '2 2 2';
  },

});

Template.text.events({});
