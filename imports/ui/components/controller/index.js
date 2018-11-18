import { Template } from 'meteor/templating';
import { VirtualJoystick } from '../../../lib/client/virtualjoystick';

import './controller.html';

Template.controller.onCreated(function () {

  var win_width = $(window).width();
  var win_height = $(window).height();

  this.joystick = new VirtualJoystick({
    container: document.getElementById('container'),
    stickElement: document.getElementById('virtualjoystick'),
    baseElement: document.getElementById('virtualjoystick'),
    stationaryBase: true,
    baseX: win_width / 2,
    baseY: win_height / 2,
    limitStickTravel: true,
    stickRadius: 200,
    add1Button: true,
    button1X: 50 + 25,
    button1Y: win_height - 50 - 25,
    mouseSupport: true,
  });
});

Template.controller.onRendered(function() {
  console.log('Given parameter for controller: ' + Template.instance().data.controller);
});

Template.controller.helpers({
});

Template.controller.events({
});
