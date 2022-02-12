/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';

import '../imports/network/server.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  log(msg) {
    check(msg, String);
    console.log(msg);
  },
});

Meteor.onConnection(function(connection) {
  console.log(connection.clientAddress, connection.httpHeaders.host, connection.httpHeaders['user-agent']);
});
