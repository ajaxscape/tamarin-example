'use strict'

const { host, baseUrl } = require('../config')
const url = host + baseUrl

module.exports = function (world) {
  const page = {
    url,
    productList: { css: '.product_list' },
    productContainer: { css: '.ajax_block_product' },
    masthead: (locator) => world.findElement(locator)
      .then((el) => require('../pageSections/masthead')(el))
  }
  return Object.freeze(page)
}
