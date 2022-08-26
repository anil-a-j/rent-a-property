import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getFavs, selectFavs } from "../store/property/propertySlice";

const Favorites = ({ favs }) => {
  const dispatch = useDispatch();
  const properties = useSelector(selectFavs);
  const favUpdated = useSelector((state) => state.property.favsUpdate);
  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch, favUpdated]);
  return (
    <>
      <div className="container">
        <h1>Favorites properties to rent</h1>
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

export default Favorites;
