export default class WalletConnect {
  constructor() {
    this.name = 'Wallet connect';
    this.logo = require('@/assets/images/walletconnect-logo.png');
    this.downloadUrl = 'https://walletconnect.com/';
    this.connect = this.connectWallet();
  }
  detectProvider() {}
  connectWallet() {}
}
