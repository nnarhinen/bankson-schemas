'use strict';

var required = require('./required');

module.exports = {
  id: '/ApiKey',
  type: 'object',
  properties: {
    description: required('string')
  }
};
