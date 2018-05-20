'use strict'
const _ = require('lodash')

module.exports.luckyNumber = (event, context, callback) => {
  const upperLimit = _.get(event, 'request.intent.slots.UpperLimit.value', 100)
  const number = _.random(0, upperLimit, false)
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'SSML',
        ssml: `<speak>
            Your lucky number is 
            <amazon:effect name='whispered'>${number}</amazon:effect>
        </speak>`
      },
      shouldEndSession: true
    }
  }

  callback(null, response)
}
