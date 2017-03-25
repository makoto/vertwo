var Market = artifacts.require("Market");

module.exports = function(callback) {
  console.log('customer', Market.deployed())
  callback()
}
