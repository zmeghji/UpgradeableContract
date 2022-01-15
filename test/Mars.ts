import hre from 'hardhat';
import assert from 'assert';

before('get factories', async function(){
    this.Mars = await hre.ethers.getContractFactory('Mars');
})

it('goes to mars', async function(){
    const mars = await this.Mars.deploy();
    // const mars = await hre.upgrades.deployProxy(this.Mars);

    assert(await mars.name() === 'Mars');
})