const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { TextEncoder, TextDecoder } = require('util');

const from_account = "YOUR EOS ACCOUNT";
const to_account  = "webxwebxwebx";
const private_key = "YOUR EOS ACCOUNT PRIVATE KEY";
const mining_interval_ms = 1000;  // time between each mining action.
const api_endpoint = "http://127.0.0.1:8888"; //  "http://127.0.0.1:8888" or public nodeos adresss.

const signatureProvider = new JsSignatureProvider([private_key]);
const rpc = new JsonRpc(api_endpoint, { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

async function transfereos(){


        var time = new Date();
        console.log(time);

        api.transact({
            actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor: from_account,
                    permission: 'active',
                }],
                data: {
                    from: from_account,
                    to: to_account,
                    quantity: '0.0100 EOS',
                    memo: '',
                },
            }]
          }, {
            blocksBehind: 3,
            expireSeconds: 9,
          }).catch((error) => {
              console.error(error);
          });
}

transfereos();
my_timer = setInterval(transfereos(), mining_interval_ms);
