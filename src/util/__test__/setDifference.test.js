'use strict';

const setDifference = require('../setDifference.js');

describe('setDifference test', () => {
  it('simple', () => {
    let result = setDifference([1, 2, 3, 4, 5, 6, 7], [1, 3, 5, 6]);
    expect(result).toStrictEqual([2, 4, 7]);
  });
});
