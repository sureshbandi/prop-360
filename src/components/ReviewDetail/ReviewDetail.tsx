import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ReviewDetail.scss";
import Rating from "@mui/material/Rating";

interface ReviewDetailProps {
  rating: number;
  review: string;
}

const ReviewDetail: FC<ReviewDetailProps> = (props) => {
  return (
    <div className="review-detail">
      <Card>
        <CardContent className="review-detail-content">
          <Typography variant="body2">{props.review}</Typography>
          <Rating name="read-only" value={props.rating} readOnly />
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewDetail;
