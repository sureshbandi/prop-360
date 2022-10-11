import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewCard.scss";
import Review from "../Review/Review";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ReviewCardProps {
  id: string;
  name: string;
  img?: string;
  rating: number;
  noOfReviews: string;
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
  return (
    <div className="prop-item">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Link to={"/detail/" + props.id}>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <div className="rating">
            <Rating name="read-only" value={props.rating} readOnly />
            <span className="no-of-reviews">{props.noOfReviews} ratings</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
