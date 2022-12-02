<template>
  <div id="plinko-game">
    <ion-phaser v-bind:game.prop="gameConfig" v-bind:initialize.prop="true" />
  </div>
</template>

<script>
import Phaser from 'phaser';
import PlinkoScene from '@/services/games/plinko/scene';

export default {
  data() {
    return {
      gameConfig: {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        transparent: true,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 300 },
            debug: false,
          },
        },
        scene: [PlinkoScene],
      },
    };
  },
};
</script>
