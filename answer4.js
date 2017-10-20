/** Question:
 * Please explain what is the bug in the following Javascript function, and how to correct it.
 *
 * Answer:
 * Bug for createArrayOfFunctions will created a list of identical functors, all functors will show same results.
 * i.e. functions are return ( NUMBER_OF_FUNCTIONS + value of X)
 * Reason of the bugs is the scope of iterator, 'i', are using 'var' for declaration
 * function(x) will use the value of i is (y-1) during runtime which is 'return x + (y-1)'
 * use 'let' instead of 'var', value of 'i' will hold the value on particular loop.
 * This is platform specific bug for variable scope issue
 **/

'use strict'
function createArrayOfFunctions(y) {
  var arr = [];
  for(let i = 0; i<y; i++) { // Correction use let instead of var, because var is scope
    arr[i] = function(x) {
      return x + i;
    }
  }
  return arr;
}
