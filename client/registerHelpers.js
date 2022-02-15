import { Template } from 'meteor/templating';

const { DateTime } = require('luxon');

Template.registerHelper('isMenuOpen', function () {
  return app.menu.isOpen();
});

Template.registerHelper('log', function (...args) {
  log(...args);
});

Template.registerHelper('concat', (...args) => { args.pop(); return args.join(''); });
Template.registerHelper('add', (a, b) => Number(a || 0) + Number(b || 0));
Template.registerHelper('sub', (a, b) => Number(a || 0) - Number(b || 0));
Template.registerHelper('formatDate', (date, format) => { if (!date) return ''; return DateTime.fromJSDate(date).toFormat(format); });
Template.registerHelper('pad', (txt, max) => txt.padEnd(max, ' '));
