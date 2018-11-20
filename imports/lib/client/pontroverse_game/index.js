class PontroverseGame {

  constructor(app) {
    this._app = app;
    this._counter = 0;
    this._counterText = undefined;
    this._catSprite = undefined;
  }

  setupBoard() {
    this._counterText = new PIXI.Text(this._counter, { fontFamily: "Helvetica, sans-serif", fontSize: "10vw", fill: 'blue' });
    this._centerCounterText();
    this._app.stage.addChild(this._counterText);

    let res = PIXI.loader.resources['game/img/cat.png'];
    this._catSprite = new PIXI.Sprite(res.texture);
    this._catSprite.x = 96;
    this._catSprite.y = 96;

    this._app.stage.addChild(this._catSprite);
  }

  resizeBoard(width, height) {
    this._app.renderer.resize(width, height);
    this._centerCounterText();
  }

  runTick() {
    this._updateCounterText();
  }

  _updateCounterText() {
    this._counterText.text = this._counter++;
    this._centerCounterText();
  }

  _centerCounterText() {
    // center text
    this._counterText.x = this._app.renderer.width / 2 - this._counterText.width / 2;
    this._counterText.y = this._app.renderer.height / 2 - this._counterText.height / 2;
  }

}

export { PontroverseGame }
