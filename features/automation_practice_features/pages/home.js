'use strict'

const { host, baseUrl } = require('../config')
const url = host + baseUrl

const page = {
  url,
  signIn: { css: 'a.login' },
  productList: { css: '.product_list'},
  productContainer: { css: '.product_container'}
}

module.exports = Object.freeze(page)
