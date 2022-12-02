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

export async function createWallet(wallet) {
  const response = await axios.post(WALLET_ENDPOINT, wallet);
  return response.data;
}
