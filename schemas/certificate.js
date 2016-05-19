'use strict';
var required = require('./required');
module.exports = {
  id: '/Certificate',
  type: "object",
  properties: {
    not_after: {
      type: 'string',
      readonly: true
    },
    not_before: {
      type: 'string',
      readonly: true
    },
    subject: {
      type: 'string',
      readonly: true
    },
    created_at: {
      type: 'string',
      format: 'datetime'
    },
    updated_at: {
      type: 'string',
      format: 'datetime'
    },
    customer_id: required('string'),
    bic: required('string'),
    target_id: required('string')
  }
};
