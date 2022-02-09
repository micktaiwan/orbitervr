import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.scene.onCreated(function helloOnCreated() {
});

Template.scene.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.scene.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
