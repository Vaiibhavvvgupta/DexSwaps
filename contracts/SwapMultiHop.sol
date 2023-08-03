// SPDX-License-Identifier: GPL-3.0-or-
pragma solidity >=0.6.0 < 0.9.0;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';


contract SwapMultiHop{
  ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
    address public constant DAI = 0x2bcAE8205a77dabB2479CF2c85ded7d963101B86;
    address public constant WETH9 = 0xEF1DACBce5194C668BEe55f2ca599F366709db0C;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    function swapExactMultihop(uint amountIn) external  returns (uint amountOut){
        TransferHelper.safeTransferFrom(WETH9, msg.sender, address(swapRouter), amountIn);
        TransferHelper.safeApprove(WETH9, msg.sender, amountIn);

        ISwapRouter.ExactInputParams memory  params = ISwapRouter.ExactInputParams({
            path: abi.encodePacked(
                WETH9,
                uint24(3000),
                USDC,
                uint(100),
                DAI
            ),
            recipient : msg.sender,
            deadline: block.timestamp,
            amountIn: amountIn,
            amountOutMinimum: 0

        });
        amountOut = swapRouter.exactInput(params);
    }

 function swapExactOutputMultihop(uint amountOut, uint amountInMaximum) external  returns (uint amountIn){
        TransferHelper.safeTransferFrom(WETH9, msg.sender, address(swapRouter), amountInMaximum);
                TransferHelper.safeApprove(WETH9, msg.sender, amountInMaximum);

        ISwapRouter.ExactOutputParams memory  params = ISwapRouter.ExactOutputParams({
            path: abi.encodePacked(
            DAI,
            uint24(100),
            USDC,
            uint24(3000),
            WETH9
            ),
            recipient : msg.sender,
            deadline: block.timestamp,
            amountOut: amountOut,
            amountInMaximum: amountInMaximum

        });
        amountIn = swapRouter.exactOutput(params);
        if(amountIn < amountInMaximum){
            TransferHelper.safeApprove(WETH9, address(swapRouter), 0);
            TransferHelper.safeTransferFrom(WETH9, address(this), msg.sender, amountInMaximum - amountIn);
        }
    }
}
