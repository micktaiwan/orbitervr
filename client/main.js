import '../imports/routes.js';
import './scene.js';
import './main.html';

import '../imports/api/cubes/collection.js';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

remote = cmd => {
  Meteor.call('remote', cmd, (e, r) => {
    // eslint-disable-next-line no-console
    if (e) { console.error(e); return; }
    try { r = JSON.parse(r); } catch {}
    // eslint-disable-next-line no-console
    console[(_.isArray(r) && r.length ? 'table' : 'log')](r);
  });
};
