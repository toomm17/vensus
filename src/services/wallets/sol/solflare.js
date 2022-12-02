export default class Solflare {
  constructor() {
    this.name = 'Solflare';
    this.logo = require('@/assets/images/solflare-logo.png');
    this.downloadUrl = 'https://solflare.com/';
    this.connect = this.connectWallet();
  }
  detectProvider() {}
  connectWallet() {}
}
