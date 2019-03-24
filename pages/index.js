import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../Ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from "../Ethereum/campaign";

class CampaignIndex extends Component {

  static async getInitialProps() {
    let campaigns = {};
    const addresses = await factory.methods.getDeployedCampaigns().call();
    for (let address of addresses) {
      const campaign = await Campaign(address);
      campaigns[address] = await campaign.methods.campaignTitle().call();
    }
    return { campaigns, addresses };
  }

  renderCampaigns() {
    const items = this.props.addresses.map(address => {
      let header = this.props.campaigns[address];
      return {
        header: header,
        meta: address,
        color: 'green',
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }


  render() {
    return (
      <Layout>
        <div style={{ color: 'white' }}>
          <h2>Open Campaigns</h2>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
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

export default CampaignIndex;
