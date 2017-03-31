// ipfs daemon --enable-pubsub-experiment

var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}); // leaving out the arguments will default to these values
const topic = 'general';

var five = require('johnny-five');

function isEven(n) {
   return n % 2 == 0;
}

five.Board().on('ready', function(){
// five.Board({ port: "/dev/cu.usbmodemfa131"}).on('ready', function(){
// five.Board({ port: "/dev/tty.usbmodem1441"}).on('ready', function(){

  led = new five.Led(9);
  console.log('Ready');


  // https://github.com/ipfs/interface-ipfs-core/tree/master/API/pubsub#pubsubsubscribe
  const receiveMsg = (msg) => {
    console.log(msg.data.toString());
    // if(isEven(msg.data.toString())){
    if(msg.data.toString() == "on"){
      led.on();
    } else {
      led.off();
    }

  }
  ipfs.pubsub.subscribe(topic, receiveMsg);

});

// ipfs pubsub pub general 1

// // publish messages
// var msgSend;
// var counter = 0
// setInterval(function(){
//   msgSend = new Buffer(counter.toString());
//   ipfs.pubsub.publish(topic, msgSend, (err) => {
//     if (err) {
//       throw err
//     }
//     // msg was broadcasted
//   })
//   counter++
// }, 3000);
