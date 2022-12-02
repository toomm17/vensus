import { addressIsRegister } from '@/api/wallet';

export default class Metamask {
  constructor() {
    this.name = 'Metamask';
    this.logo = require('@/assets/images/metamask-logo.png');
    this.downloadUrl = 'https://metamask.io/';
    this.ethChainId = '0x1';
  }

  swapChain(currentChainId) {
    if (currentChainId != this.ethChainId) {
      this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.ethChainId }],
      });
    }
  }
}

Metamask.prototype.detectProvider = function () {
  const provider = window.ethereum;
  if (provider && provider.isMetaMask) {
    return provider;
  } else {
    return Metamask.downloadUrl;
  }
};

const getAccountAddress = function (provider) {
  const accounts = provider.request({ method: 'eth_requestAccounts' });
  console.log(accounts);
  const account = accounts[0];
  return account;
};

const getCurrentChainId = function (provider) {
  return provider.request({ method: 'eth_chainId' });
};

const signWallet = function (provider, account, message) {
  return provider.request({ method: 'personal_sign', params: [message, account] });
};

const createSignMessage = function () {
  const generatedNonce = Math.floor(Math.random() * 1000000);
  return `Authorize your wallet to play !\n\nYour nonce: ${generatedNonce}`;
};

const swapChain = function (chainId) {
  const ethChainId = '0x1';
  return provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: ethChainId }],
  });
};

Metamask.prototype.connectWallet = async function (provider, chain) {
  const accountAddress = getAccountAddress(provider);
  const addrFromDb = await addressIsRegister(accountAddress, chain.name);
  console.log(addrFromDb);
  const currentChainId = getCurrentChainId(provider);
};
