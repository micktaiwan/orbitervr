/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';

// import '../imports/network/server.js';

Meteor.startup(() => {
  // Meteor.users.update({ }, { $set: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, head: { rotation: { x: 0, y: 0, z: 0 } } } }, { multi: true });
});

Meteor.methods({
  log(msg) {
    msg = JSON.stringify(msg);
    check(msg, String);
    console.log(msg);
  },
  updatePlayer(data) {
    check(data, Object);
    const id = Meteor.userId();
    Meteor.users.update(id, { $set: data });
  },
});

Meteor.onConnection(function(connection) {
  console.log(new Date(), connection.clientAddress, connection.httpHeaders.host, connection.httpHeaders['user-agent']);
});

Meteor.publish('players', function() {
  return Meteor.users.find({ _id: { $ne: this.userId } }, { fields: { username: 1, position: 1, rotation: 1, head: 1, 'status.online': 1 } });
});
