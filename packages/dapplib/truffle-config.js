require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind erosion hidden arm bone theory'; 
let testAccounts = [
"0x3f4c2e0ad364f27c319a263fd7f6f1537ed0b5ba7a8a2964ab4d336e1ffe3f8f",
"0xaa86bb5127ff33dd2d2627df6d3aaa9319a76f6bfc62f919df967853f192af54",
"0xf5c5bc12d53a80f14e5ef12aed245c0334e05fe8dbb51fe798d094a3eef68d75",
"0x6ac1b4aa3004b8b7f71d953a01200a23d715040dfaa5c68ba5a9525773882aed",
"0xb5d5e3d8712a98865eb87d0ce2100b4d7ca4cefa1ce364935b85179e94ddd692",
"0x8a585aaf5b3930ee097d898645edef046eb525b6ac5b5220ce37043bf37e0b8f",
"0x1759a45e47567a6116b3ce163ba0918407d6ab33f381eb075fc5b2f2c2547a12",
"0x4ebfb6572e404691f74e5781e98a54201f97ad3471750fba007791a6d6d4d4bb",
"0xfaa02c0232cecc7ebed84806a936e9094928680f67e1b2518be845102e804f59",
"0x642ad11c0f9e59af0bb3da633a17523e877c32b7ef54590f3b43df59e83ac2e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


