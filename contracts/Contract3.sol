// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "../node_modules/hardhat/console.sol";
//import "hardhat/console.sol";
contract Game3 {
  bool public isWon;
  mapping(address => uint) balances;

  function buy() payable external {
    balances[msg.sender] += msg.value;
    console.log("msg.sender: ", msg.sender, " value: ", msg.value);
  }

  function win(address addr1, address addr2, address addr3) external {
    //console.log("*addr1:", addr1, " *addr2:", addr2, " *addr3:", addr3);
    console.log("*addr1:");
    require(balances[addr3] > 0);
    require(balances[addr2] > balances[addr1]);
    require(balances[addr1] > balances[addr3]);
    
    isWon = true;
  }
}