/**
* Created by David FAIVRE-MAÇON  (11 February 2022)
* https://www.davidfm.me
*/

global.app = {};

global.log = function (m) {
  console.log(m);
  app.debug.set(m);
};
