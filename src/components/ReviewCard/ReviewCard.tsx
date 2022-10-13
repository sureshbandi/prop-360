import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewCard.scss";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface ReviewCardProps {
  id: string;
  name: string;
  img?: string;
  rating: number;
  noOfReviews: string;
  address: string;
  cityPincode: string;
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
  return (
    <div className="prop-item">
      <Card>
        <CardMedia
          component="img"
          height="160"
          image={props.img}
          alt="green iguana"
        />
        <CardContent sx={{ p:0, '&:last-child': { pb: 0 }, paddingTop: "10px", paddingLeft:"4px", paddingRight: "5px"}}>
          <Link to={"/detail/" + props.id}>
            <Typography gutterBottom variant="h6" component="div" align="left">
              {props.name}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary" align="left">
            {props.address}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left">
            {props.cityPincode}
          </Typography>
          
          <div className="rating">
            <Rating name="read-only" value={props.rating} readOnly />
            <Typography variant="body2" color="text.secondary" className="no-of-reviews">
                {props.noOfReviews} reviews
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
