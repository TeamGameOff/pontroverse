import { Template } from 'meteor/templating';

import './controller.html';

Template.controller.onCreated(function () {
});

Template.controller.onRendered(function() {
  console.log('Given parameter for controller: ' + Template.instance().data.controller);
});

Template.controller.helpers({
});

Template.controller.events({
});
