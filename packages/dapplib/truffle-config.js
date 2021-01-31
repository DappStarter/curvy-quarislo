require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strike rival magic essay inflict gloom slot gesture'; 
let testAccounts = [
"0xd6f8b05a899d5f7f05916eff5d588198fbc2b6df84edc06d12ef960e979d9c70",
"0xed4fbda50189fc033a3a13d1e4e1e4d0ffa7d2bbac81a152208d72a36de1df6e",
"0xdabcedd7ed378efa4bf8ad33b6e73a2bb1f51b15e87d865ebbae0d1e99ca8887",
"0xa890f2bc2ae0eeffb1d3eb26fe58116fe0e0a189b5b7d2b3479034dd4798ab13",
"0x5908294dda0a24dba69458122678ceebaf5699226b351ca69e741953ca8cdf7b",
"0x03dae04fc928e53239f391db974f08b663461deae28421e367b5e7a6e48669b9",
"0x4756515838c1c693544639e2fcf46a75efa74e8fbdbcb96aadb427f23e1e8453",
"0xdbca1a467982d5a6d4dd74a112a3234015babb2e675d1728f1dfa314067412a2",
"0x5828764bcad92aa8e63df2d4170469d2b20868931fb295879379d927340b536d",
"0x04643e9e9a8f04f2886358af9cf8c75abb008661960017aa6948e5c9791ce6bb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
