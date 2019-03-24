const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
  'arm lady supply angle banner transfer afford wolf diet notice eyebrow biology',
  'https://rinkeby.infura.io/v3/8e89343307ed4fe5a9bed4bfb11e478f'
);

const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    compiledFactory.abi
  )
    .deploy({ data: '0x' + compiledFactory.evm.bytecode.object })
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

