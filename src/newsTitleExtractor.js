const request = require('request')
const cheerio = require('cheerio')

const URL = 'https://www.corriere.it/'

const getTitle = () => new Promise((resolve, reject) => {
  request(URL, function (error, response, html) {
    if (error) {
      reject(error)
      return
    }

    const $ = cheerio.load(html)

    let title = $('.label_art').first().text()

    resolve(title)
  })
})

module.exports = getTitle
