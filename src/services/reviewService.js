const reviews = [
  { propertyId: "ptt1", rating: 3.5, noOfReviews: "423" },
  {
    propertyId: "ptt1",
    rating: 3.5,
    noOfReviews: "424",
  },
  {
    propertyId: "ptt2",
    rating: 4.5,
    noOfReviews: "423",
  },
  {
    propertyId: "ptt3",
    rating: 3,
    noOfReviews: "423",
  },
  {
    propertyId: "ptt4",
    rating: 2.5,
    noOfReviews: "423",
  },
  {
    propertyId: "ptt5",
    rating: 4.5,
    noOfReviews: "42443",
  },
];

function getReviews() {
  return reviews;
}

function getPropAndReviews() {
  return reviews;
}

function createReview(review) {
  reviews.unshift(review);
}

module.exports = {
  getReviews,
  getPropAndReviews,
  createReview,
};
