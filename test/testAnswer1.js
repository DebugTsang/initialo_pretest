var assert = require('assert');
var answer1 = require('../answer1');
describe('Oursky Pre-Test', function() {
  describe('Question 1 a.k.a. Subset module ', function() {
    it('isSubset([A,B,C,D,E] / [A,E,D])', function() {
      assert.equal(true, answer1.isSubset(['A','B','C','D','E'], ['A','E','D']));
    });

    it('isSubset([A,B,C,D,E] / [A,D,Z])', function() {
      assert.equal(false, answer1.isSubset(['A','B','C','D','E'], ['A','D','Z']));
    });

    it('isSubset([A,D,E] / [A,A,D,E])', function() {
      assert.equal(true, answer1.isSubset(['A','D','E'], ['A','A','D','E']));
    });
  });
});
