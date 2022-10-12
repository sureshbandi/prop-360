const properties = [
  {
    id: "ptt1",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-5.png",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt2",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-2.png",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt3",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-3.png",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt4",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-4.png",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt5",
    name: "Prestiage Trade Tower",
    img: "./images/prop-img-5.png",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
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
