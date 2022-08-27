// migrating the appropriate contracts
const SupplyChain = artifacts.require("SupplyChain");

module.exports = function(deployer) {
  deployer.deploy(SupplyChain);
};
