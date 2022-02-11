/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

import { Template } from 'meteor/templating';
import './debug.html';

app.debug = new ReactiveVar(false);
Template.debug.onCreated(() => { });

Template.debug.onRendered(() => { });

Template.debug.helpers({

  value() {
    return app.debug.get() || 'default text \n à la ligne';
  },
});

Template.debug.events({});
