import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign'

class RequestRow extends Component{

    
    onApprove = async (event) => {
        const campaign = Campaign(this.props.address);

        try{

            const accounts = await web3.eth.getAccounts();

            await campaign.methods.approveRequest(this.props.id).send({ from: accounts[0]});
    
                //Router.pushRoute(`/campaign/${this.props.address}/requests`);
                //this.setState({loading: false});
    
        }catch(err){
            console.log(err)
            //this.setState({loading: false, errorMessage: err.message})
    
        }

    }

    onFinalize = async () =>{

        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();

        try{

            await campaign.methods.finalizeRequest(this.props.id).send({ from: accounts[0]});

            }
        catch(err){
                console.log(err)
        //this.setState({loading: false, errorMessage: err.message})
            }
    }
    render(){
        const { Row, Cell} = Table;
        const {id, request, approversCount} = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;
        return(
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{this.props.id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>{ request.complete ? null : (
                    <Button color="green" basic onClick={this.onApprove}>Approve</Button>
                )}</Cell>
                <Cell>{request.complete ? null : (
                    <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
                )}</Cell>
            </Row>
        );
    }
}

export default RequestRow;
