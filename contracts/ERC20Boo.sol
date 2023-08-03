// SPDX-License-Identifier: GPL-3.0-or-
pragma solidity >=0.6.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BooToken is ERC20{


    constructor() ERC20("BB" , "Boo"){
        _mint(msg.sender, 100000*10** decimals());
    }
}