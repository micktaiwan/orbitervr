import { Meteor } from 'meteor/meteor';
import '../imports/network/server.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  log(m) {
    console.log(m);
  },
});
