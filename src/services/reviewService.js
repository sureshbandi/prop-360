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

const KEY_REVIEWS = "reviews";

(function init() {
  localStorage.setItem(KEY_REVIEWS, JSON.stringify(reviews));
})();

function getReviews() {
  let r = localStorage.getItem(KEY_REVIEWS);
  if (r) return JSON.parse(r);
  return [];
}

function createReview(review) {
  const reviews = getReviews();
  reviews.unshift(review);
  localStorage.setItem(KEY_REVIEWS, JSON.stringify(reviews));
}

function getReviewsByPropId(propId) {
  const reviews = getReviews();
  return reviews.filter((r) => r.propertyId == propId);
}

module.exports = {
  getReviews,
  createReview,
  getReviewsByPropId,
};
