import React, { FC, useState } from "react";
import "./Home.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [properties, setProperties] = useState([
    {
      id: "ptt",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    },
    {
      id: "ptt",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    },
    {
      id: "ptt",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    },
    {
      id: "ptt",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    },
    {
      id: "ptt",
      name: "Prestiage Trade Tower",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/ynutRDfb4uJfQcdM-YNUxg/o.jpg",
    },
  ]);
  return (
    <div className="Home">
      Property Ratings{" "}
      <ul className="cards">
        {properties.map((property) => (
          <ReviewCard
            img={property.img}
            name={property.name}
            id={property.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;