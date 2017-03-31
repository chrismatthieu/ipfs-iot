var count = 0;
var stamps = [];

setTimeout(function tick() {
  stamps[count++] = Date.now();

  if (count === 1000) {
    console.log(stamps);
    process.exit(0);
  } else {
    setTimeout(tick, 0);
  }

}, 0);
