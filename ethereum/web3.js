import Web3 from "web3";

let web3;

if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.web3.currentProvider);
}else{
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/e2614991c51942479ee0c8fafdff3f38"
    );

    web3 = new Web3(provider);
}
 
export default web3;