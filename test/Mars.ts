import hre from 'hardhat';
import assert from 'assert';

//using the openzeppelin upgrades test helpers is very important as it helps prevent some bad errors
//https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades

before('get factories', async function(){
    this.Mars = await hre.ethers.getContractFactory('Mars');
    this.MarsV2 = await hre.ethers.getContractFactory('MarsV2');

})

it('goes to mars', async function(){
    //Deploys 3 contracts: proxy, proxyadmin, mars contract
    // const mars = await hre.upgrades.deployProxy(this.Mars);
    const mars = await hre.upgrades.deployProxy(this.Mars, {kind: 'uups'});

    assert(await mars.name() === 'Mars');

    const marsV2 = await hre.upgrades.upgradeProxy(mars, this.MarsV2);

    assert (await marsV2.version() === "v2");
})