/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let testNum = 0;
  let lcmNum = 1;

  for (var i = 2; i < ceiling; i++) {
    lcmNum = lcm(lcmNum, i);
  }

  function lcm(min, max) {
    let gcdNum = gcd(min, max);

    return min * max / gcdNum;
  }

  function gcd(a, b) {

    if (a < 0) {
      a = -a;
      }

    if (b < 0){
      b = -b;
    }

    if (b > a){
      var temp = a;
      a = b;
      b = temp;
    }

    while (true){
      if (b === 0){
        return a;
      }
      a %= b;
      if (a === 0){
        return b;
      }
      b %= a;
    }

  }

  return lcmNum;

};