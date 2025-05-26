import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Web3 from 'web3';

const APP_NAME = 'My DApp';
const APP_LOGO_URL = 'https://example.com/logo.png';
const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/3c9e6436-8ef0-4c88-8a92-c1a318c42c2e';
const CHAIN_ID = 1; // Mainnet

const coinbaseWallet = new CoinbaseWalletSDK({
    appName: APP_NAME,
    appLogoUrl: APP_LOGO_URL,
    darkMode: false
});

const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, CHAIN_ID);
const web3 = new Web3(ethereum);

export { ethereum, web3 };
