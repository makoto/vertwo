var Market = artifacts.require("Market");

module.exports = function(callback) {
  console.log('insurer', Market.deployed())
  callback()
}
