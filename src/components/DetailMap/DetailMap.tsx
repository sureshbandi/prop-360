import React, { FC } from "react";
import "./DetailMap.scss";
import Map from "../../../public/images/map.png";

interface DetailMapProps {

}

const DetailMap: FC<DetailMapProps> = (props) => (
  <div className="detail-map">
    <picture className="detail-map-picture">
    <img className="detail-map-image" src={process.env.PUBLIC_URL + "/images/map.png"} />
    </picture>
  </div>
);

export default DetailMap;
