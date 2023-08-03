import bootok from "./BooToken.json";
import lifetok from "./LifeToken.json";
import singleswaptoken from "./SingleSwapToken.json";
import swapptokenmultiswap from "./SwapMultiHop.json";
import Weth9 from "./IWETH.json";

// boo token
export const booabi = bootok.abi;
export const booaddress = "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af";

// life token 
export const lifeabi = lifetok.abi
export const lifeaddress = "0xde79380FBd39e08150adAA5C6c9dE3146f53029e";


// single swap
export const SingleswaptokanAbi = singleswaptoken.abi;
export const SingleswaptokanAddress = "0xbFD3c8A956AFB7a9754C951D03C9aDdA7EC5d638";


//  swap multi hop
export const SwapMultiHopAbi = swapptokenmultiswap.abi;
export const SwapMultiHopaddress="0x38F6F2caE52217101D7CA2a5eC040014b4164E6C";



//  Weth interface
export const wethAbi = Weth9.abi;
export const wethAddress = "0xEF1DACBce5194C668BEe55f2ca599F366709db0C";
