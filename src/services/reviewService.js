import { reviews } from "./stubData";

const KEY_REVIEWS = "reviews";

(function init() {
  let r = getReviews();
  if (!r || r.lenght == 0)
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
