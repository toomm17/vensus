export default class BinanceWallet {
  constructor() {
    this.name = 'Binance wallet';
    this.logo = require('@/assets/images/binance-wallet-logo.png');
    this.downloadUrl =
      'https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp';
    this.connect = this.connectWallet();
  }
  detectProvider() {}
  connectWallet() {}
}
