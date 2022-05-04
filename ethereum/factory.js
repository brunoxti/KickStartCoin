import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF36f6bCEbdd92Db7eb97f17c23c6F13306e955eF'
);

export default instance;