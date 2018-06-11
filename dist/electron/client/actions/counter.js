'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
var INCREMENT_COUNTER = exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var DECREMENT_COUNTER = exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}