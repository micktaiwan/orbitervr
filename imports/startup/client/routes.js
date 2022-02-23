import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/default.js';
import '../../ui/layouts/game.js';


FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('layout', { main: 'home' });
  },
});

FlowRouter.route('/game', {
  name: 'game',
  action() {
    BlazeLayout.render('layout', { main: 'game' });
  },
});
