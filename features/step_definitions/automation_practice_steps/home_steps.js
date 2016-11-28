'use strict'

const pages = '../../automation_practice_features/pages'
const homePage = require(`${pages}/home`)

module.exports = function () {
  this.Then(/^I should see (\d+) products$/, function (count) {
    // Make sure at least one product exists prior to checking for all of them
    return this.waitFor(homePage.productContainer)
      .then(() =>
        this.select(homePage.productList, homePage.productContainer.css).should.eventually.have.lengthOf(count))
  })
}
