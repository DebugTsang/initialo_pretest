'use strict'
/**
 Question 3: Write a function that takes an array of integers as input. For each integer, output the next fibonacci number.
 Fibonacci number of Fn is defined by:
 Fn = Fn-1 + Fn-2 F1 = 1, F2 = 1
 */
 var exports = module.exports = {};

/**
@description calculate fabonacci number, assumption is start from 0
@param {integer} index number of fibonacci numbers want to generate
@return {array} result array of fibonacci numbers, null for error
*/

const MAX_COUNT_FIBONACCI_NUMBER_SUPPORT = 60; // Number of Fibonacci number support
exports.fibonacci = function( index){
  let fabList = [0,1,1];
  if (index < 0){
    return null;
  }
  if (index >= 0 && index <= 2){
    return fabList;
  }else{
    for ( let i = 3; i <= index; i++){
        fabList[i] = fabList[(i-1)] + fabList[(i-2)];
    }
    return fabList;
  }
}
 /**
 @description Check to array of number which is subset to other
 @param {array} fibonacciArray any number
 @return {array} result array of next fibonacci numbers
 */
 exports.nextFibonacci = function( inputArray ){

   let acquiredFibonacciArray = exports.fibonacci(MAX_COUNT_FIBONACCI_NUMBER_SUPPORT);
   let result = [];
   for( let i = 0; i < inputArray.length; i++){
      let element = inputArray[i];
      for (let j = 1 ; j < acquiredFibonacciArray.length; j++){
        let fib = acquiredFibonacciArray[j];
        if ( element >= acquiredFibonacciArray[(j-1)] && element < acquiredFibonacciArray[j] ){ //TODO: array out of bound exception
          result[i] = acquiredFibonacciArray[j];
          break;
        }
      }
   }
   return result;

 }
 var main = function(){
   let nextFibonacciNumbers = exports.nextFibonacci([1,9,22]);
   console.log("Next Fibonacci Number = " + nextFibonacciNumbers);
 }
 main();
