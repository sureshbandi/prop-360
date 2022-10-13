import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Review from "../Review/Review";

import "./Detail.scss";

import LinkTabs from "../LinkTabs/LinkTabs";
import { getPropertyByPropId, createReview, getReviewsByPropId } from "../../services";

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  let prop = getPropertyByPropId(id);
  const [showReview, setShowReview] = useState(false);

  const addReview = function(obj: any){
    createReview({...obj, propertyId: id})
  }

  return (
    <div className="Detail">
      <div className="review-menu">
        <LinkTabs reviews ={getReviewsByPropId(id)}/>
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
        {showReview && <Review createReview = {addReview}/>}
      </div>
    </div>
  );
};

export default Detail;
