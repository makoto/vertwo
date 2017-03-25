var Market = artifacts.require("Market");
var insurer = process.argv[4];
console.log('Hi, I am insurer', insurer);

var premium = Math.floor((Math.random() * 10) + 1);
var response_time = Math.floor((Math.random() * 5) + 1);

module.exports = function(callback) {
  var events;
  Market.deployed().then(function(deployed){
     events = deployed.allEvents({})
     events.watch(function(err,result) {
       if (result.event == 'QuoteRequestedEvent') {
         console.log('Got request from ', result.args.name, 'for $', result.args.cover.toString(), 'Million cover')
         setTimeout(function(){
           console.log('Sending my response ....')
           deployed.response('0x0', insurer, premium);
           callback()
         }, response_time * 1000);
       }
     })
  })
}
