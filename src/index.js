'use strict'
const githubRepos = require('./githubRepos')

module.exports.readStars = (event, context, callback) => {
  githubRepos.getRepoDetails('frameworkless-movement', 'manifesto').then(data => {
    const text = `The Frameworkless movement has ${data.stargazers_count} stars!`
    const response = {
      version: '1.0',
      response: {
        outputSpeech: {
          type: 'SSML',
          ssml: `<speak>${text}</speak>`
        },
        shouldEndSession: true
      }
    }

    callback(null, response)
  })
}
