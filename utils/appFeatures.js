import {ethers} from "ethers;"
import Web3Model from "web3modal";

import{
    booabi,booaddress
    ,lifeabi,lifeaddress
    ,SingleswaptokanAbi,SingleswaptokanAddress
    ,SwapMultiHopAbi,SwapMultiHopaddress
    ,wethAbi,wethAddress
} from "../Context/constants";

//check if wallet is connect
export const checkWalletConnected = async()=>{
    try{
    if(!window.ethereum) return console.log("Install Meatamask");
    const accounts = await window.ethereum.request({
        method:"eth_account",
    });
    const firstAccount = account[0];
    return firstAccount;
    }catch(error){
        console.log(error)
    }

};


//connect wallet
export const connectWallet =async()=> {
    try{
        if(!window.ethereum) return console.log("Install Meatamask");
        const accounts = await window.ethereum.request({
            method:"eth_requestAccount",
        });
        const firstAccount = account[0];
        return firstAccount;
        
    }catch (error){
        console.log(error)
    }
};



//boo toker fectching
export const fetchBooContract = (signerOrProvider)=> 
new ethers.Contract(booaddress, booabi, signerOrProvider);

//connect with boo token
export const connectWithBooToken = async()=>{
    try{
      const web3model = new Web3Model();
      const connection = await web3model.connect();
      const provider = new ethers.providers.Web.Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchBooContract(signer);
      return contract;

}catch(error){
    console.log(error)
}
};


// life token fetching
export const fetchLifeContract = (signerOrProvider)=> 
new ethers.Contract(lifeaddress, lifeabi, signerOrProvider);

//connect with life token
export const connectWithLifeToken = async()=>{
    try{
      const web3model = new Web3Model();
      const connection = await web3model.connect();
      const provider = new ethers.providers.Web.Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchLifeContract(signer);
      return contract;

}catch(error){
console.log(error)
}
};



//Single swap
export const fetchSingleSwapContract = (signerOrProvider)=> 
new ethers.Contract(SingleswaptokanAddress, SingleswaptokanAbi, signerOrProvider);

//connect with single swap token
export const connectWithSingleSwapToken = async()=>{
    try{
      const web3model = new Web3Model();
      const connection = await web3model.connect();
      const provider = new ethers.providers.Web.Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchSingleSwapContract(signer);
      return contract;

}catch(error){
    console.log(error)
}
};

//Swap Multi Hop
export const fetchSwapMultiHopContract = (signerOrProvider)=> 
new ethers.Contract(SwapMultiHopaddress, SwapMultiHopAbi, signerOrProvider);

//connect with swap multi hop token
export const connectWithSwapMultiHopToken = async()=>{
    try{
      const web3model = new Web3Model();
      const connection = await web3model.connect();
      const provider = new ethers.providers.Web.Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchSwapMultiHopContract(signer);
      return contract;

}catch(error){
    console.log(error)
}
};




//weth connect 
const Dai ="0x2bcAE8205a77dabB2479CF2c85ded7d963101B86";
export const fetchDaiContract = (signerOrProvider)=> 
new ethers.Contract(Dai, wethAbi, signerOrProvider);

//connect with weth
export const connectWithWeth = async()=>{
    try{
      const web3model = new Web3Model();
      const connection = await web3model.connect();
      const provider = new ethers.providers.Web.Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchDaiContract(signer);
      return contract;

}catch(error){
    crossOriginIsolated.log(error)
}
};