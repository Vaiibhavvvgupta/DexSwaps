// SPDX-License-Identifier: GPL-3.0-or-
pragma solidity >=0.6.0 < 0.9.0;


interface IWETH{
    function deposti() external payable;
     function totalSupply() external view returns(uint);
     function balanceof(address account) external view returns(uint);
     function transfer(address recipient , uint amount) external view returns(uint);
     function allowance(address spender , uint amount) external returns(bool);
     function approve (address spender , uint amount) external returns(bool);
     function transferFrom(address from, address to, uint amount) external returns(bool);



     event Transfer(address indexed from, address indexed to ,uint value);
     event Approve(address indexed owner,address indexed spender, uint value);   
     

}