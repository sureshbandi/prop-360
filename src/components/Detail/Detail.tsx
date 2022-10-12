import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

import "./Detail.scss";

import LinkTabs from "../LinkTabs/LinkTabs";
import DetailHero from "../DetailHero/DetailHero";
import DetailSkeleton from "../DetailSkeleton/DetailSkeleton";
import { getPropertyByPropId } from "../../services";

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const { id } = useParams();
  let prop = getPropertyByPropId(id);
  
  return (
    <div className="Detail">
      <LinkTabs />
      <div style={{float: 'right', paddingRight: '20px'}} >
      <Button variant="outlined" color="error" startIcon={<StarIcon />}>
        Write a review
      </Button>
      </div>
      
      <Container maxWidth="lg">
        <DetailHero id={prop.id} name={prop.name} image={prop.img} address= {prop.address} pinCode={prop.cityPincode}></DetailHero>
        <DetailSkeleton />
      </Container>
    </div>
  );
};

export default Detail;
