/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import type {HardhatUserConfig} from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades'

const config: HardhatUserConfig = {
  solidity: "0.8.9",
}

export default config;
