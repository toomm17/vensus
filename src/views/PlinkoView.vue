<template>
  <the-header @changeTheme="this.changeTheme" />
  <div class="content">
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
  </div>
  <div class="footer-ghistory">
    <div class="ghistory-container"></div>
  </div>
</template>

<script>
import PlinkoSidebar from '@/components/plinko/PlinkoSidebar.vue';
import MatterPlinkoGame from '@/components/plinko/MatterPlinkoGame.vue';
import TheHeader from '@/components/header/TheHeader.vue';

export default {
  components: {
    MatterPlinkoGame,
    PlinkoSidebar,
    TheHeader,
  },
};
</script>
