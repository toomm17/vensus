<template>
  <div
    class="popup-detect-wallet"
    @click="clickToConnect(wallet)"
    v-for="wallet in walletObjects"
    :key="wallet.name"
  >
    <img :src="wallet.logo" alt="" class="wallet-logo" />
    <span class="wallet-name">{{ wallet.name }}</span>
    <span class="wallet-detected__text" v-if="this.detectProvider(wallet)">(detected)</span>
  </div>
</template>

<script>
export default {
  props: {
    walletObjects: Object,
    chainName: Object,
  },

  data() {
    return {};
  },

  methods: {
    detectProvider(wallet) {
      console.log(wallet);
      const provider = wallet.detectProvider();
      if (provider) {
        return true;
      }
      return false;
    },
    async clickToConnect(wallet) {
      const provider = await wallet.detectProvider();
      const connect = await wallet.connectWallet(provider, this.chainName);
      if (typeof connect == 'String') {
        console.log(connect);
      }
    },
  },
};
</script>
