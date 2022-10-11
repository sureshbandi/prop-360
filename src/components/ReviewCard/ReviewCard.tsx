import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./ReviewCard.scss";
import Review from "../Review/Review";

interface ReviewCardProps {
  id: string;
  name: string;
  img?: string;
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
  const [showPopup, setPopupStatus] = useState(false);
  return (
    <li className="cards__item">
      <div className="card">
        <img className="card__image" src={props.img} alt={props.name} />
        <div className="card__content">
          <Link className="card__title" to={"/detail/" + props.id}>{props.name}</Link>
          <p className="card__text">
            This is the shorthand for flex-grow, flex-shrink and flex-basis
            combined. The second and third parameters (flex-shrink and
            flex-basis) are optional. Default is 0 1 auto.{" "}
          </p>
          <button
            className="btn card__btn"
            onClick={() => setPopupStatus(!showPopup)}
          >
            Add Review
          </button>
          {showPopup && (
            <Review
              propertyId={props.id}
              propertyName={props.name}
              setPopupStatus={setPopupStatus}
            ></Review>
          )}
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
