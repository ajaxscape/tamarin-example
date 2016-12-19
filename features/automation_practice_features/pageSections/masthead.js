'use strict'

module.exports = function (element) {
  return {
    signIn: element.waitFor({ css: 'a.login' })
  }
}