import React, { FC } from "react";
import "./DetailHero.scss";

interface DetailHeroProps {
  propertyId: string;
  propertyName: string;
}

const DetailHero: FC<DetailHeroProps> = (props) => (
  <div className="detail-hero">
    <picture className="detail-hero-picture">
    <img className="detail-hero-image" src="https://res.cloudinary.com/marketsphere/image/upload/q_60,f_auto,c_fill,g_auto,h_1200,w_3000/dpr_auto/l0ytwqlk3w7tlar8o0lg.jpg" 
        alt="{propertyName}" />
    </picture>
  </div>
);

export default DetailHero;
