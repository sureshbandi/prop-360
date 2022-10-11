import React, { FC, useState } from "react";
import "./Home.scss";
import Header from "../Header/Header";
import ReviewCard from "../ReviewCard/ReviewCard";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [properties, setProperties] = useState([
    {
      id: "ptt1",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
      rating: 3.5,
      noOfReviews: "423",
      address: "13048 N Verde River Dr #1",
      cityPincode: "Fountain Hills, AZ 85268",
    },
    {
      id: "ptt2",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
      rating: 4.5,
      noOfReviews: "423",
      address: "13048 N Verde River Dr #1",
      cityPincode: "Fountain Hills, AZ 85268",
    },
    {
      id: "ptt3",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
      rating: 3,
      noOfReviews: "423",
      address: "13048 N Verde River Dr #1",
      cityPincode: "Fountain Hills, AZ 85268",
    },
    {
      id: "ptt4",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
      rating: 2.5,
      noOfReviews: "423",
      address: "13048 N Verde River Dr #1",
      cityPincode: "Fountain Hills, AZ 85268",
    },
    {
      id: "ptt5",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
      rating: 4.5,
      noOfReviews: "423",
      address: "13048 N Verde River Dr #1",
      cityPincode: "Fountain Hills, AZ 85268",
    },
  ]);
  return (
    <div className="Home">
      <Header />
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
