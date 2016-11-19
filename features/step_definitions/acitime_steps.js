'use strict'

const page = {
  'menu': (menuLinkText) => ({xpath: `//*[@id="navigation-list"]//a[text()="${menuLinkText}"]`}),
  'subMenu': (submenuLinkText) => ({xpath: `//*[@id="nav-features"]//a[text()="${submenuLinkText}"]`}),
  'heading': {css: 'h1'}
}

const hoverDelay = 500

module.exports = function () {
  this.Then(/^I expect the heading to be "([^"]*)"$/, function checkHeadingStep (text) {
    return this.getText(page.heading).should.eventually.equal(text)
  })

  this.When(/^I click "([^"]*)" link within "([^"]*)"$/, function (submenuHeaderText, submenuLinkText) {
    return this.whenExists(page.subMenu(submenuHeaderText))
      .then(() => Promise.all([
        this.hover(page.menu(submenuLinkText), hoverDelay),
        this.click(page.subMenu(submenuHeaderText))
      ]))
  })
}
