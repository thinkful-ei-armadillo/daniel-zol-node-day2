'use strict';
const expect = require('chai').expect;
const sortFunction = require('../index');

describe('sort testing', () => {
  it('should sort array correctly', () => {
    const exampleArr = [9, 0, 7, 1, 4];
    const expectedAns = [0, 1, 4, 7, 9];
    const actualAns = sortFunction(exampleArr);
    expect(actualAns).to.deep.equal(expectedAns);
    
  });
});