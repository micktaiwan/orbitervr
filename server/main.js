/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';
import '../imports/api/cubes/collection.js';

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
  cubesInsert(data) {
    check(data, Object);

    // check if cube exists at this position
    const cube = Cubes.findOne({ position: data.position });
    if (cube) return;

    data.createdAt = new Date();
    data.ownerId = Meteor.userId();
    Cubes.insert(data);
  },
  undoCubeInsert() {
    const cube = Cubes.findOne({ ownerId: Meteor.userId() }, { sort: { createdAt: -1 } });
    if (cube) Cubes.remove(cube._id);
  },

});

Meteor.onConnection(function(connection) {
  console.log(new Date(), connection.clientAddress, connection.httpHeaders.host, connection.httpHeaders['user-agent']);
});

Meteor.publish('players', function() {
  return Meteor.users.find({ _id: { $ne: this.userId } }, { fields: { username: 1, position: 1, rotation: 1, head: 1, 'status.online': 1, createdAt: 1 } });
});

Meteor.publish('userData', function() {
  return Meteor.users.find({ _id: this.userId }, { fields: { username: 1, createdAt: 1 } });
});

Meteor.publish('cubes', function() {
  return Cubes.find({});
});
