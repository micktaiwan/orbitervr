/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

import { Template } from 'meteor/templating';
import './text.html';

Template.text.onCreated(() => { });

Template.text.onRendered(() => { });

Template.text.helpers({
  value() {
    return this.value || 'default text';
  },
});

Template.text.events({});
