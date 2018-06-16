/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPlusMinus([...args]){
  let totals = {
    plus:0,
    minus:0
  }
  for(let i = 0; i < args.length; i++){
    let n = args[i];
    totals.plus += (n > 0) ? n : 0;
    totals.minus += (n <= 0) ? n : 0;
  }
  return totals;
}

function sumPlusMinus([...args]){
  let totals = {
    plus: args.map(x => (x > 0)?x:0).reduce((a,b)=> a + b),
    minus: args.map(x => (x <= 0)?x:0).reduce((a,b)=> a + b)
  }
  return totals;
}

// Write sumPlusMinus() function here

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
