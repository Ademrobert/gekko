// Let's create our own strategy
var strat = {};

// This is what a candle looks like:
// { 
//   start: moment("2021-01-07T11:27:00.000"),
//   open: 38419.79,
//   high: 41950,
//   low: 36500,
//   close: 40177.02,
//   vwp: 39721.97582259568,
//   volume: 137597.60991700005,
//   trades: 2539877 
// }

// Prepare everything our strat needs
strat.init = function() {
  console.log("Guru Started Meditating");
  this.addTulipIndicator('ema10', 'ema', {
    optInTimePeriod: 10
  });
  this.addTulipIndicator('ema21', 'ema', {
    optInTimePeriod: 21
  });
}

// What happens on every new candle?
strat.update = function(candle) {
  console.log("Guru is lighting his candles on: ", candle.start.format('D-M-Y:H'));
  console.log(this.tulipIndicators);
}

// For debugging purposes.
strat.log = function() {
  console.log("Guru is pooping out logs");
}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
}

// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  console.log("Blissful Guru State Ended");
}

module.exports = strat;