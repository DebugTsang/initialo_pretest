var assert = require('assert');
var answer3 = require('../answer3');
describe('Oursky Pre-Test Question 3', function() {
  describe('Question 3 a.k.a. Fibonacci Number ', function() {
    it('fibonacci(2)', function() {
      assert.deepEqual([0,1,1], answer3.fibonacci(2));
    });
    it('fibonacci(-1)', function() {
      assert.equal(null, answer3.fibonacci(-1));
    });
    it('fibonacci(60)', function() {
      let actualFibArray = answer3.fibonacci(60);
      let expectedSixtyFibNum = 1548008755920;
      let expectedFiftyNineFibNum = 956722026041;
      assert.equal(expectedSixtyFibNum, actualFibArray[60]);
      assert.equal(expectedFiftyNineFibNum, actualFibArray[59]);
    });
    it('nextFibonacci with empty array []', function(){
      let result = answer3.nextFibonacci([]);
      assert.deepEqual([], result);
    });
    it('normal case for nextFibonacci with array [1, 9, 22]', function(){
      let result = answer3.nextFibonacci( [1, 9, 22]);
      assert.deepEqual([2, 13, 34], result);
    });

  });
});
