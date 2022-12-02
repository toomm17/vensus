import { toHandlers } from 'vue';

export default class Phantom {
  constructor() {
    this.name = 'Phantom';
    this.logo = require('@/assets/images/phantom-logo.png');
    this.downloadUrl = 'https://phantom.app/';
    this.connect = this.connectWallet();
  }
  detectProvider() {
    if ('solana' in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
  }
  connectWallet() {}
}
