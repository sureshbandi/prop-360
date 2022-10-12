import React, { FC, useState } from "react";
import "./Home.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
import { getPropertiesWithReviews} from "../../services";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [properties, setProperties] = useState(getPropertiesWithReviews());
  return (
    <div className="Home">
      <div className="prop-cards">
        {properties.map((property) => (
          <ReviewCard
            img={property.img}
            name={property.name}
            id={property.id}
            rating={property.rating}
            noOfReviews={property.noOfReviews}
            address={property.address}
            cityPincode={property.cityPincode}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
