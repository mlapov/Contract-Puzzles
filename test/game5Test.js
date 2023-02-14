const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
//const { ethers } = require("ethers");
const { utils } = ethers;

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();
  

    //////////////////////////////////////
    const threshold = "0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf";
    console.log(threshold);
    let myWallet = ethers.Wallet.createRandom();   
    console.log("myWallet.address:" , myWallet.address);
    
    while (myWallet.address > threshold){      
      console.log("adds");
      myWallet = ethers.Wallet.createRandom(); 
      console.log(myWallet.address);     
    }
    console.log("2:" , myWallet.address);
    let myWallet2 = myWallet.connect(ethers.provider);
    console.log("3:" , myWallet2);
    //////////////////////////////////////
    const signer = ethers.provider.getSigner(0);

    const result = await signer.sendTransaction({ 
      value: utils.parseUnits('1', 'ether'), //undefined,
      to: myWallet.address, //undefined, 
    });
    console.log(result);
    ///////////////////////////////////////////////////


    return { game, myWallet2 };
  }





  it('should be a winner', async function () {

    
    const { game, myWallet2} = await loadFixture(deployContractAndSetVariables);
    
   
    await game.connect(myWallet2).win();
    //await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
