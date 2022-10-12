import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
// import ReviewCard from "../ReviewCard/ReviewCard";

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  return (
    <div className="Detail">
      Property Ratings{" "}
      <ul className="cards">
        Welcome to details screen :
        Property id is {id}
      </ul>
    </div>
  );
};

export default Detail;
