import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";

import "./Detail.scss";

import DetailHero from "../DetailHero/DetailHero";
import DetailSkeleton from "../DetailSkeleton/DetailSkeleton";
import DetailMap from "../DetailMap/DetailMap";
// import ReviewCard from "../ReviewCard/ReviewCard";

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  return (
    <div className="Detail">
      <Container maxWidth="lg">
        <DetailHero propertyId="123" propertyName="Abcd"></DetailHero>
        <DetailSkeleton />
        <DetailMap/>
      </Container>
    </div>
  );
};

export default Detail;
