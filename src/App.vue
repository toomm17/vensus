<template>
  <!-- <body :class="this.currentTheme"> -->
  <!-- <the-header @changeTheme="this.changeTheme" />
    <div class="content">
      <router-view />
    </div>
    <div class="footer-ghistory">
      <div class="ghistory-container"></div>
    </div> -->
  <promocode />
  <!-- </body> -->
</template>

<style src="@/assets/css/reset.css"></style>
<style src="@/assets/css/fonts.css"></style>
<style src="@/assets/css/styles.css"></style>
<style src="@/assets/css/roulette.css"></style>

<script>
import TheHeader from '@/components/header/TheHeader.vue';
import RouletteView from './views/RouletteView.vue';
import Promocode from '@/components/promocode/Promocode.vue';

export default {
  components: {
    TheHeader,
    RouletteView,
    Promocode,
  },

  created() {
    if (this.currentTheme == null) {
      window.localStorage.setItem('theme', 'site_theme_dark');
    }
  },

  data() {
    return {
      currentTheme: window.localStorage.getItem('theme') || null,
    };
  },

  methods: {
    themeHandle() {
      if (this.currentTheme == 'site_theme_dark') {
        return 'site_theme_white';
      }
      return 'site_theme_dark';
    },

    changeTheme() {
      const newTheme = this.themeHandle();
      window.localStorage.setItem('theme', newTheme);
      this.currentTheme = newTheme;
    },
  },
};
</script>
