'use strict';
var required = require('./required'),
    _ = require('underscore');
module.exports = {
  id: '/Payment',
  type: "object",
  properties: {
    recipient_name: required('string'),
    recipient_bic: required('string'),
    recipient_iban: _.extend({ type: 'string', iban: true, required: true }, required('string')),
    amount: required('double'),
    payment_date: { type: 'string', format: 'date', required: true },
    reference_number: { type: 'string', referenceNumber: true, required: true },
    vendor_reference: { type: 'string' },
    from: {
      required: true,
      type: "object",
      description: "From which bank account should the charge be done",
      properties: {
        iban: _.extend({iban: true}, required('string')),
        bic: required('string')
      }
    }
  }
};
