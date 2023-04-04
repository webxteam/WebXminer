# webXminer

WEBX is a virtual proof-of-work and DAO project running on the EOS main network. To participate in this project, you only need to continuously send 0.01 EOS to the smart contract, and can obtain one ten-thousandth of the token in the token pool. The token pool is issued from the token smart contract 40 tokens every second and halved every 4 years. The EOS received by the smart contract will be accumulated in the account controlled by the smart contract, triggered by an algorithm, and repurchased on the decentralized exchanges.

1. (https://webxminer.com/) This is a miner that supports the scatter wallet protocol.

2. Mine WEBX with Nodejs.

# How to Mine WEBX with Nodejs
<b>Step 1</b>: Register miner by pushing regminer action to WEBX token contract webxtokenacc  e.g. 
 
> cleos push action webxtokenacc regminer '[\"youraccount\"]' -p youraccount@active

<b>Step 2</b>: Replace your account name (from_account) and private key (private_key) in miner.js

<b>Step 3</b>: Replace your preferred api node endpoint in webx_miner.js

<b>Step 4</b>: Install dependencies

> npm install eosjs 
> npm install node-fetch

<b>Step 5</b>: Start mining!!

> node webx_miner.js &> webx_miner.log

# How to Buy or Sell WEBX
<b>Step 1</b>: go to (https://eos.alcor.exchange/trade/webx-webxtokenacc_eos-eosio.token)

<b>Step 2</b>: Buy WEBX with EOS or Sell WEBX to EOS.
