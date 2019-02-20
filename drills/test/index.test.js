'use strict';
const expect = require('chai').expect;
const sort = require('../index');

describe('sort testing', () => {
  it('should sort array correctly', () => {
    const expectedAnswer = [2,5,6];
    const actualAnswer = sort([6,2,5]);
    expect(actualAnswer).to.deep.equal(expectedAnswer);
  });
});