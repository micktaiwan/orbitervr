import { Template } from 'meteor/templating';

const { DateTime } = require('luxon');

Template.registerHelper('isMenuOpen', function () {
  return app.menu.isOpen();
});

Template.registerHelper('log', function (msg) {
  console.log(msg);
});

Template.registerHelper('concat', (...args) => { args.pop(); return args.join(''); });
Template.registerHelper('add', (a, b) => Number(a || 0) + Number(b || 0));
Template.registerHelper('formatDate', (date, format) => DateTime.fromJSDate(date).toFormat(format));
