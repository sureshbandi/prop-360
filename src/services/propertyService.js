const properties = [
  {
    id: "ptt1",
    name: "Prestiage Trade Tower",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt2",
    name: "Prestiage Trade Tower",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt3",
    name: "Prestiage Trade Tower",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt4",
    name: "Prestiage Trade Tower",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
  {
    id: "ptt5",
    name: "Prestiage Trade Tower",
    img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    address: "13048 N Verde River Dr #1",
    cityPincode: "Fountain Hills, AZ 85268",
  },
];

const { getReviews } = require("./reviewService");

function getProperties() {
  return properties;
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

module.exports = {
  getProperties,
  getPropertiesWithReviews,
};
