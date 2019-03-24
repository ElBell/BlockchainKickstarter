import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x94CDE29BB70dAe5ADBAB4645939c13bCE2e8533C'
);

export default instance;
