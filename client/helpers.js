global.app = {};

global.log = function (m) {
  /* eslint-disable no-console */
  console.log(m);
  app.debug.set(m);
};
