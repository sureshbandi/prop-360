const properties = [
  {
    id: "1",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-1.png",
    address: "Palace Rd, High Grounds, Sampangi Rama Nagar,",
    cityPincode: "Bengaluru, KA 560001",
  },
  {
    id: "2",
    name: "Western Saddle Way",
    img: "./images/prop-img-2.png",
    address: "9237 E Western Saddle Way,",
    cityPincode: "Scottsdale, AZ 85255",
  },
  {
    id: "3",
    name: "Brooks County",
    img: "./images/prop-img-3.png",
    address: "3405 North St, Broadway Park,",
    cityPincode: "Oakland, CA 94608",
  },
  {
    id: "4",
    name: "McKellips Villa",
    img: "./images/prop-img-4.png",
    address: "8780 E McKellips Rd #244, Golf View,",
    cityPincode: "Scottsdale, AZ 85257",
  },
  {
    id: "5",
    name: "West Cross",
    img: "./images/prop-img-5.png",
    address: "408 1/2 E 3rd #3, Freeway Destination,",
    cityPincode: "Boston, MA 02127",
  },
];

const KEY_PROPS = "properties";

(function init() {
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
      filteredReviews.forEach((f) => {
        noOfReviews += +f.noOfReviews;
        rating += +f.rating;
      });

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
