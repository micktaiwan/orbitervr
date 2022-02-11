import { Template } from 'meteor/templating';

Template.registerHelper('isMenuOpen', function () {
  return app.menu.isOpen();
});
