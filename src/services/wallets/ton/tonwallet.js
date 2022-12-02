export default class TonWallet {
  constructor() {
    this.name = 'Ton wallet';
    this.logo = require('@/assets/images/ton-logo.png');
  }

  detectProvider() {
    if ('ton' in window) {
      return window.ton;
    }
  }
}
