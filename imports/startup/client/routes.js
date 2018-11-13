// pontroverse application routes

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Import needed templates

import '../../ui/layouts/app';
import '../../ui/pages/app';
import '../../ui/pages/game';
import '../../ui/pages/controller';
import '../../ui/pages/not_found';

// Specify routes

FlowRouter.route('/', {
  name: 'App.app',
  action(params) {
    this.render('App_pontroverse', 'App_app');
  }
});

FlowRouter.route('/game', {
  name: 'App.game',
  action(params) {
    this.render('App_pontroverse', 'App_game');
  }
});

FlowRouter.route('/controller/:controllerId', {
  name: 'App.controller',
  action(params, qs, controller) {
    this.render('App_pontroverse', 'App_controller', { controller });
  },
  data(params) {
    return params.controllerId;
  }
});

FlowRouter.route('*', {
  name: 'App.notFound',
  action(params) {
    this.render('App_pontroverse', 'App_notFound');
  }
});
