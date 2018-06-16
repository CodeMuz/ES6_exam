/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

function sumObjectValues(nums){
  let total = 0;
  for(let a in nums){
    if(nums.hasOwnProperty(a)){    
      if(!isNaN(nums[a])){
        total += nums[a];
      }
    }
  }
  return total;
}
// Write code here

console.log(sumObjectValues(nums));
//42
