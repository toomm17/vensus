<template>
  <div class="ping-info">
    <img :src="this.iconPath" alt="ping" class="ping-logo" />
    <div class="ping-info-content">
      <div class="ping-info__text">Ping</div>
      <div class="ping-info__ping green-text">50 ms</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconPath: require('@/assets/images/ping.png'),
    };
  },
};
</script>
