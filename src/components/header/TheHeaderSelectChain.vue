<template>
  <div class="connect-wallet header_btn" @click="this.clickConnect">
    <the-header-wallet-svg />
    <div class="connect-wallet__text">Select currency</div>
    <the-header-arrow-svg :dropSeen="this.dropSeen" />
  </div>
  <template v-if="dropSeen">
    <div class="chain-menu">
      <ul class="chains-list">
        <li
          class="chain"
          v-for="chain in chains"
          :key="chain.name"
          @click="clickOnChain(chain.name)"
        >
          <img :src="chain.imgSrc" class="chain__img" alt="" />
          <span class="chain-name__text">{{ chain.name }}</span>
          <span class="chain-connect__text">Connect</span>
        </li>
      </ul>
    </div>
  </template>
</template>

<script>
import TheHeaderWalletSvg from './TheHeaderWalletSvg.vue';
import TheHeaderArrowSvg from './TheHeaderArrowSvg.vue';
import {
  detectBscWallets,
  detectSolWallets,
  detectEthWallets,
  detectTonWallets,
} from '@/services/wallets/detector';

export default {
  components: {
    TheHeaderWalletSvg,
    TheHeaderArrowSvg,
  },
  data() {
    return {
      dropSeen: false,
      chains: [
        {
          name: 'SOL',
          imgSrc: require('@/assets/images/sol_logo.svg'),
          detector: detectSolWallets(),
        },
        {
          name: 'BNB',
          imgSrc: require('@/assets/images/bnb_logo.svg'),
          detector: detectBscWallets(),
        },

        {
          name: 'ETH',
          imgSrc: require('@/assets/images/eth_logo.svg'),
          detector: detectEthWallets(),
        },
        {
          name: 'TON',
          imgSrc: require('@/assets/images/ton-logo.png'),
          detector: detectTonWallets(),
        },
      ],
    };
  },

  emits: {
    popupOpen: null,
  },

  methods: {
    clickConnect() {
      this.dropSeen = !this.dropSeen;
    },

    clickOnChain(chainName) {
      for (let element of this.chains) {
        if (element.name == chainName) {
          this.clickConnect();
          this.$emit('popupOpen', { name: chainName, detector: element.detector });
          return;
        }
      }
    },
  },
};
</script>
