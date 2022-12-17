<template>
  <div class="video">
    <video ref="videoPlayer" class="video__media" autoplay muted></video>
  </div>
</template>
<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
  z-index: 1;
}

.video__media {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<script>
import video from '@/assets/video/vensus1080.mov';

export default {
  mounted() {
    this.$refs.videoPlayer.src = video;
  },
};
</script>
