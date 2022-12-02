<template>
  <div class="game-area">
    <div class="game-container">
      <crash-game />
    </div>
  </div>
  <div class="sidebar-area">
    <div class="sidebar-container">
      <crash-sidebar />
    </div>
  </div>
</template>

<script>
import CrashGame from '@/components/crash/CrashGame.vue';
import CrashSidebar from '@/components/crash/CrashSidebar.vue';

export default {
  components: {
    CrashGame,
    CrashSidebar,
  },
};
</script>
