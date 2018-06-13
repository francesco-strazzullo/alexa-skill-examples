const request = require('request')

const getRepoDetails = (owner, repo) => new Promise((resolve, reject) => {
  const options = {
    url: `https://api.github.com/repos/${owner}/${repo}`,
    headers: {
      'User-Agent': 'francesco-strazzullo'
    }
  }
  request(options, (error, response, data) => {
    if (error) {
      reject(error)
      return
    }

    resolve(JSON.parse(data))
  })
})

module.exports = {
  getRepoDetails
}
