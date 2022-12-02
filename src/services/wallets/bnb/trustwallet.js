export default class TrustWallet {
  constructor() {
    this.name = 'Trust wallet';
    this.logo = require('@/assets/images/trust-wallet-logo.png');
    this.downloadUrl = 'https://trustwallet.com/';
    this.connect = this.connectWallet();
  }
  detectProvider() {}
  connectWallet() {}
}
