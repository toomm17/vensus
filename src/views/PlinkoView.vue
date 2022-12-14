<template>
  <div class="game-area">
    <div class="game-container">
      <matter-plinko-game />
    </div>
  </div>
  <div class="sidebar-area">
    <div class="sidebar-container">
      <plinko-sidebar />
    </div>
  </div>
</template>

<script>
import PlinkoSidebar from '@/components/plinko/PlinkoSidebar.vue';
import MatterPlinkoGame from '@/components/plinko/MatterPlinkoGame.vue';

export default {
  components: {
    MatterPlinkoGame,
    PlinkoSidebar,
  },
};
</script>
