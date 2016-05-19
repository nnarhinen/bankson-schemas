'use strict';

var string = function() {
  return {
    type: 'string'
  };
};


var StatementBalance = {
  type: "object",
  properties: {
    amount: {
      type: 'number'
    },
    booking_date: {
      type: 'string',
      format: 'date'
    },
    available_amount: {
      type: 'number'
    }
  }
};

var StatementRow = {
  type: 'object',
  description: 'The statement rows',
  properties: {
    additional_information: {
      type: 'array',
      items: {
        type: 'string'
      },
      description: 'Additional information for one row. Messages etc.'
    },
    amount: {
      type: 'number'
    },
    archive_id: {
      type: 'string',
      description: 'The archive identifier given by the bank'
    },
    booking_date: {
      type: 'string',
      format: 'date'
    },
    booking_information: {
      type: 'string'
    },
    entry_reference: {
      type: 'integer',
      description: 'The row number in the statement'
    },
    payment_date: {
      type: 'string',
      format: 'datetime'
    },
    receiver: {
      type: 'string'
    },
    receiver_account: {
      type: 'string'
    },
    reference_number: {
      type: 'string'
    },
    value_date: {
      type: 'string',
      format: 'date'
    }
  }
};

module.exports = {
  id: '/BankAccountStatement',
  type: "object",
  properties: {
    account_owner_name: string(),
    balances: {
      type: 'array',
      items: StatementBalance
    },
    bank_account_id: {
      type: 'integer'
    },
    created_at: {
      type: 'string',
      format: 'datetime'
    },
    currency: {
      type: 'string'
    },
    entries: {
      type: 'array',
      items: StatementRow
    },
    from: {
      type: 'string',
      format: 'datetime',
      description: 'The start date of the statement period'
    },
    id: {
      type: 'integer'
    },
    legal_sequence_number: {
      type: 'string',
      description: 'The sequence number for the statement given by the bank'
    },
    servicer_bic: {
      type: 'string',
      description: 'BIC of the bank'
    },
    servicer_name: {
      type: 'string',
      description: 'Name of the bank'
    },
    to: {
      type: 'string',
      format: 'datetime',
      description: 'The end date of the statement period'
    },
    updated_at: {
      type: 'string',
      format: 'datetime'
    }
  }
};
