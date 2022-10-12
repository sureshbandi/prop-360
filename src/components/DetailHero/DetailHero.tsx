import React, { FC } from "react";
import "./DetailHero.scss";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface DetailHeroProps {
  id: string;
  name: string;
  image: string;
  address: string;
  pinCode: string;
}
/* 
const DetailHero: FC<DetailHeroProps> = (props) => (
  <div className="detail-hero">
    <picture className="detail-hero-picture">
    <img className="detail-hero-image" src={props.image} 
        alt="{propertyName}" />
    </picture>
  </div>
); */

const DetailHero: FC<DetailHeroProps> = (props) =>  (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={props.image}
      alt={props.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.name} | {props.address} | {props.pinCode}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default DetailHero;
