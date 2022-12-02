<template>
  <div
    class="popup-wallets"
    v-bind:style="{
      position: 'absolute',
      left: this.getCenterX + 'px',
      top: this.getCenterY + 'px',
    }"
    v-if="this.isOpen"
  >
    <div class="popup-wallets__title">Connect a wallet to continue</div>
    <button class="popup-exit__btn">
      <img
        :src="require('@/assets/images/dark-theme-exit.svg')"
        alt=""
        class="popup-exit-img"
        @click="exitClick"
      />
    </button>
    <hr class="popup-delimiter-sections" />
    <div class="popup-detect-wallets-row">
      <the-header-detect-wallet
        :walletObjects="this.detectedWallets().slice(0, 2)"
        :chainName="this.chainName"
      />
    </div>
    <div class="popup-detect-wallets-row">
      <the-header-detect-wallet
        :walletObjects="this.detectedWallets().slice(2, 4)"
        :chainName="this.chainName"
      />
    </div>
  </div>
</template>

<script>
import TheHeaderDetectWallet from './TheHeaderDetectWallet.vue';

export default {
  components: {
    TheHeaderDetectWallet,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: false,
    },
    chainName: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      popupWidth: 757,
      popupHeight: 332,
    };
  },

  computed: {
    bodyAddShadow() {
      const body = document.querySelector('body');
      body.style.cssText += 'background: rgba(0, 0, 0, 0)';
    },

    bodyRemoveShadow() {
      const body = document.querySelector('body');
      body.style.cssText -= 'background: rgba(0, 0, 0, 0)';
    },

    getCenterX() {
      return (screen.width - this.popupWidth) / 4;
    },

    getCenterY() {
      return (screen.width - this.popupHeight) / 5;
    },
  },

  methods: {
    exitClick() {
      this.$emit('popupExit', true);
    },

    detectedWallets() {
      if (this.isOpen) {
        return this.chainName.detector;
      }
    },
  },
};
</script>
