import React, { useRef, useState, FC } from "react";
import "./Review.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ValidationSnackbars from "../ValidationSnackbars/ValidationSnackbars";

interface ReviewProps { createReview?(data: any): any }

const Review: FC<ReviewProps> = (props) => {
  const reviewRef = useRef<HTMLInputElement>(null);
  const [rating, setRating] = useState<number | null>(0);
  const [error, setError] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  
  function submit() {
    setSubmit(true);    
    if (rating == null || rating < 1) {
      return;
    }
    let review = reviewRef.current?.value;
    if (review == "" || review == null) {
      setError(true);
    }    
    props.createReview && props.createReview({rating, review});
    setSubmit(false);    

    setRating(0);
    // reviewRef.current.value = '';
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
          label="Review"
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
            Save
          </Button>
        </div>
      </Box>
      {isSubmitted && (
        <ValidationSnackbars
          open={!(rating != null && rating > 0)}
          message="eweewe"
          severity="error"
        />
      )}
    </div>
  );
};

export default Review;
