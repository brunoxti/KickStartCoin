import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css'

class CampaignIndex extends Component{

    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaigns().call();

        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campain</a>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>;
    }

    render(){
        return <div>
            {this.renderCampaigns()}
            <Button
            content="Create Campaign"
            icon="add circle"
            primary={true}
            />
            
            </div>
    }
}

export default CampaignIndex;

