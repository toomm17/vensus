import Phaser from 'phaser';

export default class PlinkoScene extends Phaser.Scene {
  constructor() {
    super('PlinkoScene');
  }

  create() {
    this.physics.add.circle(25, 25, 10, 'white');
  }

  createPlinko() {}
}
