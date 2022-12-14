import Phaser from 'phaser';
import plinko from '@/assets/images/plinko.png'

export default class PlinkoScene extends Phaser.Scene {
  constructor() {
    super('PlinkoScene');
  }

  preload() {
    this.load.image('plinko', plinko)
  }

  create() {
    this.physics.add.image(400, 0, 'plinko')
  }

  createPlinko() {}
}
