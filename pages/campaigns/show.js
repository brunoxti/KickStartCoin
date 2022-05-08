import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import {Card } from 'semantic-ui-react';
import web3 from "../../ethereum/web3";


class CampaignShow extends Component{

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address)
        
        const summary = await campaign.methods.getSummary().call();
        
        return{
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards(){

        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The  manager created this campaign and can create request to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: requestsCount,
                meta: 'Number of Request',
                description: 'A request tries to withdraw money from the contract. REqust must be by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donate to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ethere)',
                description: 'The balance is how much money this campaign has left to spend.'
            }
        ];

        return <Card.Group items={items}/>;
    }

    render (){
        return (
            <Layout>
        <h3>Campaign Details</h3>
        {this.renderCards()}
        </Layout>
        );this.componentDidCatch
    }
}

export default CampaignShow;