var Market = artifacts.require("Market");
var customer = process.argv[4];
var instance;
console.log('Hi, I am customer', customer);

module.exports = function(callback) {
  Market.deployed().then(function(i){
    instance = i;
    return instance.request(customer, 100)
  }).then(function(response){
    events = instance.allEvents({})
    events.watch(function(err,result) {
      if (result.event == 'QuoteRespondedEvent') {
        console.log('Got response from ', result.args.name, 'for $', result.args.premium.toString(), 'Million at', result.transactionHash)
        callback();
      }
    })
  })
}
