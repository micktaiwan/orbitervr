import { Template } from 'meteor/templating';

Template.registerHelper('isMenuOpen', function () {
  return app.menu.isOpen();
});

Template.registerHelper('log', function (msg) {
  console.log(msg);
});

Template.registerHelper('concat', (...args) => { args.pop(); return args.join(''); });
