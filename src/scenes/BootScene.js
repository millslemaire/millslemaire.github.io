/*global Phaser*/
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Create the scene
    this.cameras.main.setBackgroundColor(0xEEEEEE);
    // add bodies
    var ceiling = this.createRect(this.centerX, 0, 800, 50, true);
    var floor = this.createRect(this.centerX, 600, 800, 50, true);
    var rwall = this.createRect(800, this.centerY, 50, 600, true);
    var lwall = this.createRect(0, this.centerY, 50, 600, true);
    var box = this.createRect(this.centerX, this.centerY, 50, 50, false);
  }

  update (time, delta) {
    // Update the scene
  }

  createRect(x, y, width, height, boolstatic){
    this.matter.add.sprite(x,y,null, null,{
      shape: 'rectangle',
      width: width,
      height: height,
      isStatic: boolstatic,
    });
  };
}
