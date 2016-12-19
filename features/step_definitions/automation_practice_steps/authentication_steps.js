'use strict'

const pages = '../../automation_practice_features/pages'

module.exports = function () {
  this.Given(/^I sign in with the test user$/, function () {
    const homePage = require(`${pages}/home`)(this)
    const authenticationPage = require(`${pages}/authentication`)(this)
    return homePage.masthead({ id: 'header'})
      .then((masthead) => masthead.signIn)
      .then((el) => el.click())
  })
}
