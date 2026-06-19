'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  function fnAdder(number) {
    if (number === undefined) {
      const currentValue = totalSum;

      totalSum = 0;

      return currentValue;
    }

    totalSum += number;

    return fnAdder;
  }

  return fnAdder;
}

module.exports = makeInfinityAdder;
