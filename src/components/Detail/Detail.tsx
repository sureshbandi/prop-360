import React, { FC, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Review from "../Review/Review";
import { lst_reviews } from "../../services";

import "./Detail.scss";

import LinkTabs from "../LinkTabs/LinkTabs";
import { getPropertyByPropId } from "../../services";
import { ReviewModel } from "../LinkTabs/LinkTabs";

interface DetailProps {}

export type ReviewContextType = {
  reviews: ReviewModel[];
  addReview: (review: ReviewModel) => void;
};
export const ReviewContext = createContext<ReviewContextType | null>(null);
const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  let prop = getPropertyByPropId(id);
  const [showReview, setShowReview] = useState(false);
  const [updated, setUpdated] = useState(0);
  const [reviews, add_review] = useState<ReviewModel[]>(lst_reviews);

  function hideReview() {
    setShowReview(false);
    setUpdated(updated + 1);
  }
  const addReview = (data: ReviewModel) => {
    add_review([...reviews, data]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      <div className="Detail">
        <div className="review-menu">
          <LinkTabs isUpdated={updated} />
        </div>
        <div className="add-review">
          {!showReview && (
            <Button
              className="write-review"
              variant="outlined"
              color="error"
              onClick={() => {
                setShowReview(true);
              }}
              startIcon={<StarIcon />}
            >
              Write a review
            </Button>
          )}
          {showReview && <Review setShowReview={hideReview} />}
        </div>
      </div>
    </ReviewContext.Provider>
  );
};

export default Detail;
