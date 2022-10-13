const reviews = [
  { propertyId: "1", rating: 5, noOfReviews: "750" },
  {
    propertyId: "1",
    rating: 5,
    noOfReviews: "150",
  },
  {
    propertyId: "2",
    rating: 4,
    noOfReviews: "480",
  },
  {
    propertyId: "3",
    rating: 4.5,
    noOfReviews: "610",
  },
  {
    propertyId: "4",
    rating: 3.5,
    noOfReviews: "280",
  },
  {
    propertyId: "5",
    rating: 3,
    noOfReviews: "190",
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

export { getReviews, createReview, getReviewsByPropId };
