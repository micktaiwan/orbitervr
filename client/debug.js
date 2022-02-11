import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './debug.html';

app.debug = new ReactiveVar(false);
Template.debug.onCreated(() => { });

Template.debug.onRendered(() => { });

Template.debug.helpers({

  value() {
    return app.debug.get() || 'default text\na la line';
  },
});

Template.debug.events({});
