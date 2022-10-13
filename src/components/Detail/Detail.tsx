import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Review from "../Review/Review";

import "./Detail.scss";

import LinkTabs from "../LinkTabs/LinkTabs";
import { getPropertyByPropId } from "../../services";

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  let prop = getPropertyByPropId(id);
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="Detail">
      <div className="review-menu">
        <LinkTabs />
      </div>
      <div className="add-review">
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setShowReview(true);
          }}
          startIcon={<StarIcon />}
        >
          Write a review
        </Button>
        {showReview && <Review />}
      </div>
    </div>
  );
};

export default Detail;
