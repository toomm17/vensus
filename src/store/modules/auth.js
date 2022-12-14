export default {
  state: {
    lastConectWallet: localStorage.getItem('last-connect-wallet') || null,
    userDataJwt: localStorage.getItem('ud') || null,
    userWallets: localStorage.getItem('uw') || null
  },
};
