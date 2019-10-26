/*global Phaser, window*/
import TestRoom from './scenes/TestRoom.js';
import Config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('TestRoom', TestRoom);
    this.scene.start('TestRoom');
  }
}

window.game = new Game();
