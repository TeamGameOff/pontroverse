import { Template } from 'meteor/templating';
import { VirtualJoystick } from '../../../lib/client/virtualjoystick';

import './controller.html';

Template.controller.onCreated(function () {

});

Template.controller.onRendered(function() {
  console.log('Given parameter for controller: ' + Template.instance().data.controller);

  // run rendering of joystick when template is ready
  this.autorun(() => {
    // get dimensions from window
    var win_width = $(window).width();
    var win_height = $(window).height();
    // create joystick controller
    this.joystick = new VirtualJoystick({
      container: document.getElementById('virtualjoystick'),
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
});

Template.controller.helpers({

});

Template.controller.events({
  'mousedown/touchstart': function(event, template) {
    // check button event when clicked or pressed
    console.log('Button1 pressed: ' + Template.instance().joystick.button1Pressed);
  }
});
