import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../Ethereum/campaign';
import web3 from '../../Ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      campaignTitle: summary[0],
      minimumContribution: summary[1],
      balance: summary[2],
      requestsCount: summary[3],
      approversCount: summary[4],
      manager: summary[5]
    };
  }

  renderCards() {
    const {
      campaignTitle,
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: 'Title of Campaign',
        meta: campaignTitle,
        description:
          'The name assigned to this campaign',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: 'Address of Manager',
        meta: manager,
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: 'Minimum Contribution (wei)',
        meta: minimumContribution,
        description:
          'You must contribute at least this much wei to become an approver'
      },
      {
        header: 'Number of Requests',
        meta: requestsCount,
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: 'Number of Approvers',
        meta: approversCount,
        description:
          'Number of people who have already donated to this campaign'
      },
      {
        header: 'Campaign Balance (ether)',
        meta: web3.utils.fromWei(balance, 'ether'),
        description:
          'The balance is how much money this campaign has left to spend.'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <style jsx global>{`
        body {
        background: radial-gradient(circle at 20% 20%, #004d00, #00264d);
        font: 11px menlo;
        color: #fff;
      }
    `}</style>
      </Layout>
    );
  }
}

export default CampaignShow;
