global.app = {};

global.log = function (...args) {
  /* eslint-disable no-console */
  console.log(...args);
  app.debug.set(args.map(m => JSON.stringify(m)).join(' '));
  Meteor.call('log', args.join(' '));
};
