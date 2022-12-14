import axios from 'axios';

const WALLET_ENDPOINT = 'http://localhost:8082/wallet/';

export async function addressIsRegister(address, coin) {
  const endpoint = WALLET_ENDPOINT + 'get/' + address + '/' + coin; // TODO new Url() format
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createWallet(address, coin) {
  console.log(coin, 'COIN');
  const walletData = { address: address, coin: coin.name };
  const endpoint = WALLET_ENDPOINT + 'create/';
  const response = await axios.post(endpoint, walletData);
  return response.data;
}
