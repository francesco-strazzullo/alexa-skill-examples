'use strict'
const newsTitleExtractor = require('./newsTitleExtractor')

module.exports.newsTitle = (event, context, callback) => {
  newsTitleExtractor().then(title => {
    const response = {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'SSML',
          ssml: `<speak>${title}</speak>`
        },
        shouldEndSession: true
      }
    }

    callback(null, response)
  })
}
