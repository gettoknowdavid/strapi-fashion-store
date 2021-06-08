'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByCategory: async (ctx, next) => {
    const { slug } = ctx.params;
    next();
    return slug;
  },
  findByType: async (ctx, next) => {},
  findByProduct: async (ctx, next) => {},
};
