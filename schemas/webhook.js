'use strict';

var required = require('./required'),
    _ = require('underscore');

module.exports = {
  id: '/Webhook',
  type: "object",
  properties: {
    description: required('string'),
    url: _.extend({format: 'uri'}, required('string')),
    test: {
      type: 'boolean',
    },
    production: {
      type: 'boolean'
    }
  }
};
