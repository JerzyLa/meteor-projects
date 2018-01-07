import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    if (typeof web3 !== 'undefined') {
      console.log('currentProvider exists...');
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      console.log('currentProvider not exists...');
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      if(!web3.isConnected)
        console.log("not connected");
      else
        console.log("connected");
    }

    this.balance = 0;
  }

  getEtherBalance() {
    if(typeof web3.eth.accounts[0] !== 'undefined') {
      this.balance = Number(web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]), "ether"));
    }
    else {
      this.balance = 1;
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div>
       <h1>This is my balance</h1>
       <button onClick={() => {this.getEtherBalance()}}>Get etherum balance</button>
       <p>{this.balance} in Ether</p>
      </div>
    );
  }
};
