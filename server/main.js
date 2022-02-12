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
  updatePlayer(data) {
    check(data, Object);
    const id = Meteor.userId();
    console.log(id, data);
    Meteor.users.update(id, { $set: data });
  },
});

Meteor.onConnection(function(connection) {
  console.log(connection.clientAddress, connection.httpHeaders.host, connection.httpHeaders['user-agent']);
});

Meteor.publish('players', function() {
  return Meteor.users.find({ _id: { $ne: this.userId } });
});
