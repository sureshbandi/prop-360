import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ReviewDetail.scss";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";

interface ReviewDetailProps {
  rating: number;
  review: string;
  date?: Date;
}

const ReviewDetail: FC<ReviewDetailProps> = (props) => {
  return (
    <div className="review-detail">
      <Card>
        <CardContent className="review-detail-content">
          <div className="review-detail-rating">
            <Rating name="read-only" value={props.rating} readOnly />
            <span className="review-detail-rating-date">
              {props.date?.getMonth()}/{props.date?.getDay()}/
              {props.date?.getFullYear()}
            </span>
          </div>

          <Typography variant="body2" align="left">
            {props.review}
          </Typography>
        </CardContent>
      </Card>
      <Divider />
    </div>
  );
};

export default ReviewDetail;
