const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const compilerInput = {
  language: "Solidity",
  sources: {
    'Campaign': { content: fs.readFileSync('./Contracts/Campaign.sol', 'utf8') }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": [ "abi", "evm.bytecode" ]
      }
    }
  }
};

console.log('Compiling the contract');
// Note: You have to pass the input in with JSON.stringify now.
const compiledContract = JSON.parse(solc.compile(JSON.stringify(compilerInput)));

if(compiledContract.errors) {
  compiledContract.errors.forEach(err => console.log(err.formattedMessage));
}

// Note: This changed slightly since I'm using JSON.parse above.
const campaignFactory = compiledContract.contracts['Campaign'].CampaignFactory;
const campaign = compiledContract.contracts['Campaign'].Campaign;

// Note: This is now called 'abi' and not 'interface'
const factory_abi = campaignFactory.abi;
fs.writeFileSync('./build/CampaignFactory.json', JSON.stringify(campaignFactory, null, 2));

const campaign_abi = campaign.abi;
fs.writeFileSync('./build/Campaign.json', JSON.stringify(campaign, null, 2));
