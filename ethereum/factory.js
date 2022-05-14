import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1B92Ca143c5aA3231c96916fEB983d6E65A48cDD'
);

export default instance;