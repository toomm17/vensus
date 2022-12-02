export default class CryptoCom {
  constructor() {
    this.name = 'Crypto.com';
    this.logo = require('@/assets/images/crypto-com-logo.png');
    this.downloadUrl = 'https://crypto.com/';
    this.connect = this.connectWallet();
  }
  detectProvider() {}
  connectWallet() {}
}
