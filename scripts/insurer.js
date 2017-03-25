var Market = artifacts.require("Market");
var insurer = process.argv[4];
console.log('Hi, I am insurer', insurer);

module.exports = function(callback) {
  var events;
  Market.deployed().then(function(deployed){
     events = deployed.allEvents({})
     events.watch(function(err,result) {
       if (result.event == 'QuoteRequestedEvent') {
         console.log('Got request from ', result.args.name, 'for $', result.args.cover.toString(), 'Million')
         setTimeout(function(){
           console.log('Sending my quote ....')
           deployed.response('0x0', insurer, 20)
           callback()
         }, 3000);
       }else{
        //  console.log('unrelated', result.event)
       }
     })
  })
  // console.log('eol')
}
