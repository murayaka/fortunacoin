const Fortunacoin = artifacts.require("Fortunacoin");

module.exports = function (deployer) {
  deployer.deploy(Fortunacoin);
};
