// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract Mars is Initializable, ERC20Upgradeable {

    function initialize() public initializer{
        __ERC20_init("Mars", "MARS");
        _mint(msg.sender, 10000000 * 10 ** decimals());

    }
}