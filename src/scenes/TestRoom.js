/*global Phaser*/
export default class TestRoom extends Phaser.Scene {
  constructor () {
    super('TestRoom');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('blackbox','./assets/blackbox.png');
    this.load.image('greybox','./assets/greybox.png');
    this.load.image('whitebox','./assets/whitebox.png');
    this.load.image('redbox','./assets/redbox.png');
    this.load.image('orangebox','./assets/orangebox.png');
    this.load.image('yellowbox','./assets/yellowbox.png');
    this.load.image('bluebox','./assets/bluebox.png');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Create the scene
    //Add background color
    this.cameras.main.setBackgroundColor(0xEEEEEE);
    // Add walls
    this.matter.add.rectangle(this.centerX, 0, 800, 50, {isStatic: true});
    this.matter.add.rectangle(this.centerX, 600, 800, 50, {isStatic: true});
    this.matter.add.rectangle(0, this.centerY, 50, 600, {isStatic: true});
    this.matter.add.rectangle(800, this.centerY, 50, 600, {isStatic: true});
    // Add player sprite
    this.player = this.matter.add.sprite(this.centerX, this.centerY, 'bluebox', 50, 50, false);
  }

  update (time, delta) {
    // Update the scene
  }
}
