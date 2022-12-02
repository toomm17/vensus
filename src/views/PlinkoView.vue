<template>
  <div class="game-area">
    <div class="game-container">
      <plinko-game />
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
import PlinkoGame from '@/components/plinko/PlinkoGame.vue';

export default {
  components: {
    PlinkoGame,
    PlinkoSidebar,
  },
};
</script>
