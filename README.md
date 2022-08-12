# KickStartCoin


This is a crowdfunding system with campaign registration and participant control and fund spending requests.

Using the Rinkeby network, smart contract with Solidity and front-end with nextjs and unit tests with Ganache.

## Getting Started

Set you account provider a new HDWalletProvider with address wallet and rinkeby address at deploy.js file.

Run: 
```bash
npm install
#and
node ethereum/deploy.js

```
Copy the address where the contract was deployed displayed in the console and put it in the .env file in the project root.

And run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can create a campaign or view the campaign details on `campaigns/`.

You can contribute to the current campaign.

You can view the requets of campaigns.

You can approve or finalize requests to campaigns and create a request for speed que amount in campaigns.



This is the routes of dapp 
```bash
routes
.add('/campaigns/new', 'campaigns/new')
.add('/campaigns/:address', '/campaigns/show')
.add('/campaigns/:address/requests', 'campaigns/requests/index')
.add('/campaigns/:address/requests/new','/campaigns/requests/new');
```

