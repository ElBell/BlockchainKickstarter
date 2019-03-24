import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x1729CB0ed72C1725Be864F4b7cff5C980bd570A4'
);

export default instance;
