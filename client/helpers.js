global.app = {};

global.log = function (m) {
  console.log(m);
  app.debug.set(m);
};
