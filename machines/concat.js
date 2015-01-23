module.exports = {
  friendlyName: 'Concatenate',
  description: 'Concatenate an array of strings and return the combined version.',
  extendedDescription: '',
  inputs: {
    strings: ['foo']
  },
  defaultExit: 'success',
  exits: {
    error: {
      description: 'Unexpected error occurred.'
    },
    success: {
      description: 'Returns the concatenated result.',
      example: 'foo'
    }
  },
  fn: function(inputs, exits) {
    var result = '';
    for (var i = 0; i < inputs.strings.length; i++){
      result += inputs.strings[i];
    }
    return exits.success(result);
  },

};
