import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";

import "./Detail.scss";

import DetailHero from "../DetailHero/DetailHero";
import DetailSkeleton from "../DetailSkeleton/DetailSkeleton";
import { getPropertyByPropId } from "../../services";


interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  let prop = getPropertyByPropId(id);
  
  return (
    <div className="Detail">
      <Container maxWidth="lg">
        <DetailHero id={prop.id} name={prop.name} image={prop.img} address= {prop.address} pinCode={prop.cityPincode}></DetailHero>
        <DetailSkeleton />
      </Container>
    </div>
  );
};

export default Detail;
