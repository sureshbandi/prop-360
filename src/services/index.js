const propertyService = require("./propertyService");
const reviewService = require("./reviewService");

module.exports = {
  ...propertyService,
  ...reviewService,
};
