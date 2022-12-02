import Metamask from '@/services/wallets/eth/metamask';
import Phantom from '@/services/wallets/sol/phantom';
import TonWallet from '@/services/wallets/ton/tonwallet';

const SUPPORT_BSC_WALLETS = [new Metamask()];
const SUPPORT_ETH_WALLETS = [new Metamask()];
const SUPPORT_SOL_WALLETS = [new Phantom()];
const SUPPPORT_TON_WALLETS = [new TonWallet()];


function detectChainWallets(chainWallets) {
  const detectedWallets = [];
  for (let wallet of chainWallets) {
    detectedWallets.push(wallet);
  }
  return detectedWallets;
}

export function detectEthWallets() {
  return detectChainWallets(SUPPORT_ETH_WALLETS);
}

export function detectBscWallets() {
  return detectChainWallets(SUPPORT_BSC_WALLETS);
}

export function detectSolWallets() {
  return detectChainWallets(SUPPORT_SOL_WALLETS);
}

export function detectTonWallets() {
  return detectChainWallets(SUPPPORT_TON_WALLETS);
}
