import { Template } from 'meteor/templating';

import '../../../lib/client/pixijs';
import { PontroverseGame } from '../../../lib/client/pontroverse_game';

import './game.html';

Template.game.onCreated(function() {
  this.pixijs = {};
  this.game = undefined;
});

Template.game.onDestroyed(function() {
  console.log(this.pixijs.resizer);
  $(window).off('resize', this.pixijs.resizer);
});

Template.game.onRendered(function() {
  // run rendering of game when template is ready
  this.autorun(() => {

    this.pixijs.app = new PIXI.Application({
      width: this.$('#board').innerWidth(),
      height: this.$('#board').innerHeight(),
      antialiasing: true,
      transparent: true,
      resolution: 1
    });

    this.game = new PontroverseGame(this.pixijs.app);

    this.pixijs.resizer = _.debounce(() => {
      with (this.$('#board')) {
        this.game.resizeBoard(innerWidth(), innerHeight());
      }
    }, 200);

    PIXI.loader
      .add('game/img/cat.png')
      .load(() => {
        this.game.setupBoard();
        this.$('#board').append(this.pixijs.app.view);
        $(window).resize(this.pixijs.resizer);
        this.pixijs.app.ticker.add(() => this.game.runTick());
      });

  });
});

Template.game.helpers({
});

Template.game.events({
});
