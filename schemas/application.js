'use strict';

var required = require('./required'),
    _ = require('underscore');

module.exports = {
  id: '/Application',
  type: "object",
  properties: {
    name: required('string'),
    redirect_uri: _.extend({format: 'uri'}, required('string'))
  }
};
