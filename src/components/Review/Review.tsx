import React, { FC } from "react";
import "./Review.scss";

interface ReviewProps {
  propertyId: string;
  propertyName?: string;
  setPopupStatus?: any;
}

const Review: FC<ReviewProps> = (props) => (
  <div className="review">
    <div className="review-content">
      <div className="review-header">
        <h2 className="review-header--heading">{props.propertyName}</h2>
        <span
          className="review-close"
          onClick={() => props.setPopupStatus(false)}
        ></span>
      </div>
    </div>
  </div>
);

export default Review;
