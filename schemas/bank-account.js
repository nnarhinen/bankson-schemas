'use strict';
var required = require('./required'),
    _ = require('underscore');
module.exports = {
  id: '/BankAccount',
  type: "object",
  properties: {
    iban: _.extend({iban: true}, required('string')),
    bic: required('string'),
    contract_id: { type: 'string' },
    certificate_id: { type: 'integer', required: true }
  }
};
