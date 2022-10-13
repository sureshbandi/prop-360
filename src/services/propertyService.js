const properties = [
  {
    id: "ptt1",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-5.png",
    address: "Palace Rd, High Grounds, Sampangi Rama Nagar, ",
    cityPincode: "Bengaluru, KA 560001",
  },
  {
    id: "ptt2",
    name: "9237 E Western Saddle Way",
    img: "./images/prop-img-2.png",
    address: "9237 E Western Saddle Way",
    cityPincode: "Scottsdale, AZ 85255North Scottsdale",
  },
  {
    id: "ptt3",
    name: "Oakland, CA ",
    img: "./images/prop-img-3.png",
    address: "3405 Helen St #4,",
    cityPincode: "Oakland, CA 94608",
  },
  {
    id: "ptt4",
    name: "Scottsdale, AZ",
    img: "./images/prop-img-4.png",
    address: "8780 E McKellips Rd #244",
    cityPincode: "Scottsdale, AZ 85257",
  },
  {
    id: "ptt5",
    name: "Boston, MA",
    img: "./images/prop-img-5.png",
    address: "408 1/2 E 3rd #3",
    cityPincode: "Boston, MA 02127",
  },
];

const KEY_PROPS = "properties";

(function init() {
  let p = getProperties();
  if (!p || p.length == 0) localStorage.setItem(KEY_PROPS, JSON.stringify(properties));
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
