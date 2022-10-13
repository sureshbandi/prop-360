import { properties } from "./stubData";

const KEY_PROPS = "properties";

(function init() {
  let p = getProperties();
  if (!p || p.length == 0)
    localStorage.setItem(KEY_PROPS, JSON.stringify(properties));
})();

const { getReviews } = require("./reviewService");

function getProperties() {
  let p = localStorage.getItem(KEY_PROPS);
  if (p) return JSON.parse(p);
  return [];
}

function getPropertiesWithReviews() {
  let reviews = getReviews();
  let p = [];
  if (reviews && reviews.length > 0) {
    properties.forEach((prop) => {
      let filteredReviews = reviews.filter((r) => r.propertyId == prop.id);
      let noOfReviews = 0;
      let rating = 0;
      let noOfRatings = 0;
      filteredReviews.forEach((f) => {
        if (f.review) noOfReviews++;
        if (f.rating) {
          noOfRatings++;
          rating += +f.rating;
        }
      });
      if (noOfRatings != 0) {
        rating = rating / noOfRatings;
      }

      p.push({ ...prop, noOfReviews, rating });
    });
  }
  return p.length > 0 ? p : properties;
}

function getPropertyByPropId(propId) {
  const properties = getProperties();
  return properties.find((r) => r.id == propId);
}

export { getProperties, getPropertiesWithReviews, getPropertyByPropId };
