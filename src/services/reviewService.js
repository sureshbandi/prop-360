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
const lst_reviews = [
  {
    propertyId: "1",
    review:
      "Came over to the house for a free estimate; arrived on time; came with all of the materials they needed; took their time to do a great job; cleaned up everything before they left so you could not tell they were even here. Everything looks great!",
    rating: 5,
    date: new Date(2022, 10, 30),
    category: "property",
  },
  {
    propertyId: "1",
    review:
      "Thank you Welington Handyman.  You were very accommodating and arrived the SAME day I needed to have new curtains and rods install in two rooms.  Your work was very professional and efficient..  I will definately call upon your services for home repair services again soon",
    rating: 5,
    date: new Date(2022, 10, 12),
    category: "property",
  },
  {
    propertyId: "1",
    review:
      "This is the best place to get all your desires for nails, feet, message, facial etc.  The people are fantastic: kind, helpful, accommodating and excellent. I have been going for years and I have never been disappointed!!  I love the place!",
    rating: 5,
    date: new Date(2022, 10, 12),
    category: "society",
  },
  {
    propertyId: "1",
    review:
      "Clean spot with great service. Accommodated our party of six. I got a gel many pedi with some friends. I added 30 min reflexology, which was great. I didn't get a facial, but I think I will in the future.  I saw they sell Eminence products, which makes me think they must be good facials",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "society",
  },
  {
    propertyId: "1",
    review:
      "This is the best place to get all your desires for nails, feet, message, facial etc.  The people are fantastic: kind, helpful, accommodating and excellent. I have been going for years and I have never been disappointed!!  I love the place!",
    rating: 3,
    date: new Date(2022, 8, 12),
    category: "locality",
  },
  {
    propertyId: "1",
    review:
      "We got the regular pedi but it felt very rushed. We were done in 30 mins. Maybe I don't get enough pedicures but i was expecting g a little longer. The ladies were nice tho!",
    rating: 2,
    date: new Date(2022, 7, 12),
    category: "locality",
  },
  {
    propertyId: "1",
    review:
      "Simply Green has tons of fun vegan polishes to choose from! Great service every time! Love this place!",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "owner",
  },
  {
    propertyId: "1",
    review:
      "Clean spot with great service. Accommodated our party of six. I got a gel many pedi with some friends. I added 30 min reflexology, which was great. I didn't get a facial, but I think I will in the future.  I saw they sell Eminence products, which makes me think they must be good facials",
    rating: 4,
    date: new Date(2022, 7, 25),
    category: "tenant",
  },
];
export const categories = [
  "property",
  "society",
  "locality",
  "owner",
  "tenant",
];

const KEY_REVIEWS = "reviews";
const KEY_ALL_REVIEWS = "all_reviews";

(function init() {
  localStorage.setItem(KEY_REVIEWS, JSON.stringify(reviews));
  localStorage.setItem(KEY_ALL_REVIEWS, JSON.stringify(lst_reviews));
  localStorage.setItem("SELECTED_TAB", 0);
})();

function getReviews() {
  let r = localStorage.getItem(KEY_REVIEWS);
  if (r) return JSON.parse(r);
  return [];
}
function getAllReviews() {
  let r = localStorage.getItem(KEY_ALL_REVIEWS);
  if (r) return JSON.parse(r);
  return [];
}

function createReview(review) {
  const reviews = getAllReviews();
  let tab = localStorage.getItem("SELECTED_TAB");
  const category = categories[tab];
  reviews.unshift({ ...review, category: category });
  localStorage.setItem(KEY_ALL_REVIEWS, JSON.stringify(reviews));
}

function getReviewsByPropId(propId) {
  const reviews = getReviews();
  return reviews.filter((r) => r.propertyId == propId);
}

function getReviewsByCategory(category) {
  const reviews = lst_reviews;
  return reviews
    .filter((r) => r.category == category)
    .sort(function (a, b) {
      const date1 = new Date(a);
      const date2 = new Date(b);

      return date1 - date2;
    })
    .reverse();
}

function getReviewsByCategory_context(category, data) {
  const reviews = data;
  return reviews
    .filter((r) => r.category == category)
    .sort(function (a, b) {
      const date1 = new Date(a);
      const date2 = new Date(b);

      return date1 - date2;
    })
    .reverse();
}

export {
  getReviews,
  createReview,
  getReviewsByPropId,
  getReviewsByCategory,
  lst_reviews,
  getReviewsByCategory_context,
};
