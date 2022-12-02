<template>
  <div class="sidebar-row">
    <ping />
    <info-buttons />
  </div>
  <another-games />
  <betting-area />
</template>

<style src="@/assets/css/sidebar.css"></style>

<script>
import Ping from './Ping.vue';
import InfoButtons from './InfoButtons.vue';
import AnotherGames from './AnotherGames.vue';
import BettingArea from './BettingArea.vue';

export default {
  components: {
    Ping,
    InfoButtons,
    AnotherGames,
    BettingArea,
  },
};
</script>
