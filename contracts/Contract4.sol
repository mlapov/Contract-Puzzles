// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "../node_modules/hardhat/console.sol";

contract Game4 {
  bool public isWon;

  mapping(address => mapping(address => bool)) nested;

  function write(address x) external {
    nested[x][msg.sender] = true;
    console.log("msg.sender: ", msg.sender, " x: ", x);
  }

  function win(address y) external {
    require(nested[msg.sender][y], "Nope. Try again!");

    isWon = true;
  }
}