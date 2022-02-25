/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';
import '../imports/api/cubes/collection.js';
import '../imports/api/cubes/methods.js';
import stringify from 'fast-json-stable-stringify';

import '../imports/network/server.js';

// remote
// Meteor.users.update({ }, { $set: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, head: { rotation: { x: 0, y: 0, z: 0 } } } }, { multi: true });

const admins = Meteor.settings.admins || [];

const isAdmin = userId => {
  if (!userId && (Meteor.isClient || (DDP._CurrentMethodInvocation.get() || DDP._CurrentPublicationInvocation.get()))) userId = Meteor.userId();
  return _.contains(admins, userId);
};

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
  remote(str) {
    check(str, String);
    if (!isAdmin()) return '🤬';

    console.log('eval from method', { userId: Meteor.userId(), str });
    let res;
    try {
      res = Promise.await(eval(str));
      if (res && res.fetch) res = res.fetch();
      if (res && res.toArray) res = Promise.await(res.toArray());
      if (res && typeof res.toJSON === 'function') res = res.result || res.toJSON();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('eval from method FAILED:', { err });
      return err.stack;
    }
    console.log('eval from method succeed');
    return stringify(res, { cycles: true });
  },
});

Meteor.onConnection(function(connection) {
  console.log(new Date(), connection.clientAddress, connection.httpHeaders.host, connection.httpHeaders['user-agent']);
});

Meteor.publish('players', function() {
  return Meteor.users.find({ }, { fields: { username: 1, position: 1, rotation: 1, head: 1, 'status.online': 1, 'status.lastLogin.date': 1, createdAt: 1 } });
});

Meteor.publish('userData', function() {
  return Meteor.users.find({ _id: this.userId }, { fields: { username: 1, createdAt: 1, 'status.lastLogin.date': 1 } });
});

Meteor.publish('cubes', function() {
  return Cubes.find({});
});
