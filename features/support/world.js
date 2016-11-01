'use strict'

const driver = require('./driver')
const tamarin = require('tamarin')

module.exports = {
  World: class extends tamarin {
    constructor () {
      super(driver)
    }
  }
}

