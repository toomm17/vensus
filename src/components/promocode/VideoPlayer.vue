<template>
  <div class="intro">
    <div class="video">
      <video ref="videoPlayer" class="video__media" autoplay muted loop></video>
    </div>
  </div>
</template>

<style scoped>
.intro {
  max-height: 100vh;
  overflow: hidden;
}

.intro:after {
  content: ' ';
  display: 'block';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 2;
}

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
import video from '@/assets/video/vensus11.mov';

export default {
  mounted() {
    this.$refs.videoPlayer.src = video;
  },
};
</script>
