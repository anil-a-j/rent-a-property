import React, { useState } from "react";
import "./filter.css";
import { useDispatch } from "react-redux";
import { filterData } from "../../store/property/propertySlice";

const Filter = () => {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("$500-$2500");
  const [property, setProperty] = useState("House");

  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();

    if (place && date && price && property) {
      dispatch(filterData({ place, date, price, property }));
    } else {
      alert("Fill all the fields!");
    }
  };

  const currentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${
      today.getMonth() + 1 > 9
        ? `${today.getMonth() + 1}`
        : `0${today.getMonth() + 1}`
    }-${today.getDate()}`;
  };

  return (
    <div className="filter">
      <div className="title">
        <h1>Search properties to rent</h1>
        <div className="select">
          <select>
            <option>Search with Search Bar</option>
            <option>other option</option>
          </select>
        </div>
      </div>
      <div className="search-bar">
        <form className="form" onSubmit={search}>
          <div className="box">
            <label>Location</label>
            <input
              type="text"
              placeholder="New York,USA"
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className="box">
            <label>When</label>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Select Move-in Date"
                value={date ? date : ""}
                disabled
              />
              <input
                type="date"
                min={currentDate()}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="box">
            <label>Price</label>
            <select value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value="$500-$2500">$500-$2500</option>
              <option value="$2500-$5000">$2500-$5000</option>
              <option value="$5000-$7500">$5000-$7500</option>
            </select>
          </div>
          <div className="box">
            <label>Property Type</label>
            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
            >
              <option value="house">Houses</option>
              <option value="apartment">Apartments</option>
            </select>
          </div>
          <button type="submit" className="button-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
