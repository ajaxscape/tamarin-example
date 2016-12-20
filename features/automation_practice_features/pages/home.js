'use strict'

const { host, baseUrl } = require('../config')
const url = host + baseUrl

const page = {
  url,
  productList: { css: '.product_list' },
  productContainer: { css: '.ajax_block_product' },
  masthead: require('../pageSections/masthead')
}

module.exports = Object.freeze(page)
