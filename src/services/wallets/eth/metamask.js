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

const getAccountAddress = async function (provider) {
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  console.log(accounts);
  const account = accounts[0];
  return account;
};

const getCurrentChainId = async function (provider) {
  return await provider.request({ method: 'eth_chainId' });
};

const signWallet = async function (provider, account, message) {
  return await provider.request({ method: 'personal_sign', params: [message, account] });
};

const createSignMessage = function () {
  const generatedNonce = Math.floor(Math.random() * 1000000);
  return `Authorize your wallet to play !\n\nYour nonce: ${generatedNonce}`;
};

const swapChain = async function (chainId) {
  const ethChainId = '0x1';
  return await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: ethChainId }],
  });
};

Metamask.prototype.connectWallet = async function (provider, chain) {
  const accountAddress = await getAccountAddress(provider);
  const addrFromDb = await addressIsRegister(accountAddress, chain.name);

  if (addrFromDb.wallet == '123') {
    const currentChainId = await getCurrentChainId(provider);

    if (currentChainId != this.ethChainId) {
      await swapChain(this.ethChainId);
    }
  } else {
    console.log('connect authorized wallet');
    // await signWallet()
  }
};
