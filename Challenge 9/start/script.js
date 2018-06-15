/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

function mult(obj){
  let {x,y,z} = obj;
  return x*y*z;
}
// Write mult() function here

console.log(mult(obj));
// 300
