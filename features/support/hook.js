'use strict'

let fs = require('fs')
let path = require('path')
let sanitize = require('sanitize-filename')

module.exports = function () {
  const driver = require('./driver')
  const screenShotDir = 'screenshots'
  this.World = require('./world').World // overwrite default World constructor
  this.setDefaultTimeout(3600000)

  this.After(function (scenario, next) {
    if (scenario.isFailed()) {
      driver.takeScreenshot()
        .then((data) => {
          let base64Data = data.replace(/^data:image\/pngbase64,/, '')
          try {
            fs.accessSync(screenShotDir)
          } catch (e) {
            fs.mkdirSync(screenShotDir)
          }
          fs.writeFile(path.join(screenShotDir, sanitize(scenario.getName() + '_' + Date.now() + '.png').replace(/ /g, '_')), base64Data, 'base64', (err) => {
            if (err) {
              console.log(err)
            }
          })
        })
    }
    driver.manage().deleteAllCookies()
      .then(() => next())
  })

  this.AfterFeatures(function () {
    return driver.quit()
  })
}
