export default class CoinBase {
  constructor() {
    this.name = 'Coinbase';
    this.logo = require('@/assets/images/coinbase-logo.png');
    this.downloadUrl = 'https://www.coinbase.com/'
    this.connect = this.connectWallet()
  }
  detectProvider() {}
  connectWallet() {}
}
