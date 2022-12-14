<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo"></div>
      <the-header-nav />
      <the-header-wallet @popupOpen="this.popupOpenHandle"/>
      <the-header-theme @changeTheme="this.changeTheme" />
      <the-header-wallet-popup
        :is-Open="isPopupOpen"
        :chainName="clickedChainName"
        @popupExit="this.isPopupOpen = false"
      />
      <div class="user-profile header_btn">
        <div class="user-profile__letter">A</div>
      </div>
    </div>
  </header>
</template>

<style src="@/assets/css/header.css"></style>

<script>
import TheHeaderTheme from './TheHeaderTheme.vue';
import TheHeaderWallet from './TheHeaderSelectChain.vue';
import TheHeaderNav from './TheHeaderNav.vue';
import TheHeaderWalletPopup from './TheHeaderWalletPopup.vue';

export default {
  components: {
    TheHeaderTheme,
    TheHeaderWallet,
    TheHeaderNav,
    TheHeaderWalletPopup,
  },

  emits: {
    changeTheme: Boolean,
  },

  data() {
    return { isPopupOpen: false, clickedChainName: new Object() };
  },

  methods: {
    popupOpenHandle(chainName) {
      this.isPopupOpen = true;
      this.clickedChainName = chainName;
    },

    changeTheme() {
      this.$emit('changeTheme', true);
      console.log('emit on Header');
    },
  },
};
</script>
