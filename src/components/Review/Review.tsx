import React, { useRef, useState, FC, useContext } from "react";
import "./Review.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ValidationSnackbars from "../ValidationSnackbars/ValidationSnackbars";
import { createReview } from "../../services/reviewService";
import { ReviewContext, ReviewContextType } from "../Detail/Detail";
import { categories } from "../../services/reviewService";
interface ReviewProps {
  setShowReview: any;
}

const Review: FC<ReviewProps> = (props) => {
  const reviewRef = useRef<HTMLInputElement>(null);
  const [rating, setRating] = useState<number | null>(0);
  const [error, setError] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  const { reviews, addReview } = useContext(ReviewContext) as ReviewContextType;
  function submit() {
    setSubmit(true);
    if (rating == null || rating < 1) {
      return;
    }
    if (reviewRef.current?.value == "" || reviewRef.current?.value == null) {
      setError(true);
      return;
    }
    createReview({
      review: reviewRef.current.value,
      rating: rating,
      date: new Date(),
      propertyId: "ptt1",
    });
    let tab = localStorage.getItem("SELECTED_TAB");
    const index = tab == null ? 0 : tab;
    const category = categories[parseInt(index.toString())];
    addReview({
      review: reviewRef.current.value,
      rating: rating,
      date: new Date(),
      propertyId: "ptt1",
      category: category,
    });
    debugger;
    props.setShowReview();
  }
  return (
    <div className="review">
      <Box
        component="form"
        className="review-content"
        noValidate
        autoComplete="off"
      >
        <div className="rating">
          <span>Rating : </span>
          <Rating
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            className="rating-star"
            name="size-medium"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="write a review..."
          multiline
          fullWidth
          minRows="6"
          variant="outlined"
          inputRef={reviewRef}
          error={error}
          onChange={() =>
            reviewRef.current?.value == "" || reviewRef.current?.value == null
              ? setError(true)
              : setError(false)
          }
        />

        <div className="save">
          <Button className="save-btn" variant="contained" onClick={submit}>
            Post Review
          </Button>
        </div>
      </Box>
      {isSubmitted && (
        <ValidationSnackbars
          open={!(rating != null && rating > 0)}
          message="Please select rating"
          severity="error"
        />
      )}
    </div>
  );
};

export default Review;
