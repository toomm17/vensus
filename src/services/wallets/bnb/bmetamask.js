import { addressIsRegister, createWallet } from '@/api/wallet';

export default class BnbMetamask {
  constructor() {
    this.name = 'Metamask';
    this.logo = require('@/assets/images/metamask-logo.png');
    this.downloadUrl = 'https://metamask.io/';
    this.bnbChainId = `0x${Number(56).toString(16)}`;
  }

  swapChain(currentChainId) {
    if (currentChainId != this.bnbChainId) {
      this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: this.bnbChainId }],
      });
    }
  }
}

BnbMetamask.prototype.detectProvider = function () {
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

const swapChain = async function (provider, chainId) {
  return await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: chainId }],
  });
};

BnbMetamask.prototype.connectWallet = async function (provider, chain) {
  const accountAddress = await getAccountAddress(provider);
  const addrFromDb = await addressIsRegister(accountAddress, chain.name);

  if (addrFromDb.wallet == null) {
    const currentChainId = await getCurrentChainId(provider);

    if (currentChainId != this.bnbChainId) {
      const result = await swapChain(provider, this.bnbChainId);
      console.log(result);
    }

    const signMessage = createSignMessage();
    await signWallet(provider, accountAddress, signMessage);

    const createdWallet = await createWallet(accountAddress, chain);
    
    // JWT
    localStorage.setItem('pwu', createWallet.jwt);
  } else {
    console.log('connect authorized wallet');
    // await signWallet()
  }
};
