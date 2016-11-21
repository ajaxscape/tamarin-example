'use strict'

const _ = require('lodash')
const pages = '../../automation_practice_features/pages'
const homePage = require(`${pages}/home`)

module.exports = function () {
  this.Then(/^I should see at least (\d+) products$/, function (count) {
    return this.select(homePage.productList, homePage.productContainer.css).should.eventually.have.lengthOf(count)
  });
}