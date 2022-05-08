import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3747B6d3A0B648bcb33A99F0E2CaB5fCF7FADed7'
);

export default instance;