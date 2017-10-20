'use strict';
/* in case we cannot use underscore.js */

/**

Write a function that takes two arrays as input, each array contains a list of A-Z; Your program should return True if the 2nd array is a subset of 1st array, or False if not.
*/

var exports = module.exports = {};

/**
@description Check to array of number which is subset to other
@param {array} setA any string or number
@param {array} setB any string or number
@return {boolean} setA or setB is subset to other
*/
exports.isSubset = function( setA, setB){
  console.log("isSubset([" + setA + "], [" + setB + "])");
  var bigSet, smallSet = [];
  if (setA.length > setB.length){
    bigSet = setA;
    smallSet = setB;
  }else{
    bigSet = setB;
    smallSet = setA;
  }
  var sortedBigSet = bigSet.sort(); // Native Sort = Quick Sort
  var sortedSmallSet = smallSet.sort();

  for ( let iSmall = 0; iSmall < sortedSmallSet.length; iSmall++){
      var elementSmall = sortedSmallSet[iSmall];
      var found = false;
      for ( let iBig = 0; iBig < sortedBigSet.length; iBig++){
          var elementBig = sortedBigSet[iBig];
          if ( elementSmall == elementBig){
              found = true;
              break;
          }
          if ((iBig == sortedBigSet.length-1) && !found) {
              return false; // item not exist
          }
      }
  }
  return true;
}
var main = function(){

  var r1 = exports.isSubset(['A','B','C','D','E'], ['A','E','D']);
  console.log("result=" + r1);
  var r2 = exports.isSubset(['A','B','C','D','E'], ['A','D','Z']);
  console.log("result=" + r2);
  var r3 = exports.isSubset(['A','D','E'], ['A','A','D','E']);
  console.log("result=" + r3);
}
main();
