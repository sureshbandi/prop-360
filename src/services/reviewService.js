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
const lst_reviews = [
  {
    propertyId: "ptt1",
    review:
      "Came over to the house for a free estimate; arrived on time; came with all of the materials they needed; took their time to do a great job; cleaned up everything before they left so you could not tell they were even here. Everything looks great!",
    rating: 5,
    date: new Date(2022, 10, 30),
    category: "property",
  },
  {
    propertyId: "ptt1",
    review:
      "Thank you Welington Handyman.  You were very accommodating and arrived the SAME day I needed to have new curtains and rods install in two rooms.  Your work was very professional and efficient..  I will definately call upon your services for home repair services again soon",
    rating: 5,
    date: new Date(2022, 10, 12),
    category: "property",
  },
  {
    propertyId: "ptt1",
    review:
      "This is the best place to get all your desires for nails, feet, message, facial etc.  The people are fantastic: kind, helpful, accommodating and excellent. I have been going for years and I have never been disappointed!!  I love the place!",
    rating: 5,
    date: new Date(2022, 10, 12),
    category: "society",
  },
  {
    propertyId: "ptt1",
    review:
      "Clean spot with great service. Accommodated our party of six. I got a gel many pedi with some friends. I added 30 min reflexology, which was great. I didn't get a facial, but I think I will in the future.  I saw they sell Eminence products, which makes me think they must be good facials",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "society",
  },
  {
    propertyId: "ptt1",
    review:
      "This is the best place to get all your desires for nails, feet, message, facial etc.  The people are fantastic: kind, helpful, accommodating and excellent. I have been going for years and I have never been disappointed!!  I love the place!",
    rating: 3,
    date: new Date(2022, 8, 12),
    category: "locality",
  },
  {
    propertyId: "ptt1",
    review:
      "We got the regular pedi but it felt very rushed. We were done in 30 mins. Maybe I don't get enough pedicures but i was expecting g a little longer. The ladies were nice tho!",
    rating: 2,
    date: new Date(2022, 7, 12),
    category: "locality",
  },
  {
    propertyId: "ptt1",
    review:
      "Simply Green has tons of fun vegan polishes to choose from! Great service every time! Love this place!",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "owner",
  },
  {
    propertyId: "ptt1",
    review:
      "Clean spot with great service. Accommodated our party of six. I got a gel many pedi with some friends. I added 30 min reflexology, which was great. I didn't get a facial, but I think I will in the future.  I saw they sell Eminence products, which makes me think they must be good facials",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "tenant",
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

function getReviewsByCategory(category) {
  const reviews = lst_reviews;
  return reviews.filter((r) => r.category == category);
}

export { getReviews, createReview, getReviewsByPropId, getReviewsByCategory };
