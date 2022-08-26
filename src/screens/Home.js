import React from "react";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import "./screens.css";
import { useSelector } from "react-redux";
import { selectProperties } from "../store/property/propertySlice";

const Home = () => {
  const properties = useSelector(selectProperties);

  return (
    <>
      <div className="container">
        <Filter />
        <div className="cards">
          {properties &&
            properties.map((data, key) => {
              return <Card data={data} key={key} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
