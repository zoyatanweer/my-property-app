import React, { useState } from "react";
import { useFilter } from "../../context/FilterContext";
import { locations, prices, propertyTypes } from "../../constants/constants";
import DatePicker from "sassy-datepicker";
import { CalendarMonthIcon } from "../../Assets/allsvg";
import "./Filter.css";

const Filter = () => {
  const { FilterState, FilterDispatch } = useFilter();
  const [value, setValue] = useState("");
  const [isCalenderShown, setIsCalenderShown] = useState(false);
  const [someDate, setSomeDate] = useState(new Date());

  const calenderToggleHandler = (event) => {
    setIsCalenderShown((current) => !current);
  };

  return (
    <div className="filter-section">
      <div className="filter-item">
        <h5 className="filter-title grey-text">Location</h5>

        <div>
          <select
            className="dropdown"
            value={FilterState.location}
            onChange={(e) =>
              FilterDispatch({
                type: "LOCATION",
                payload: e.target.value,
              })
            }
          >
            {locations.map((location) => {
              return (
                <option
                  key={location}
                  value={location}
                  className="dropdown-content"
                >
                  {location}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="filter-item">
        <h5 className="filter-title grey-text">When</h5>
        <h4
          className="show-date-picker filter-choice"
          onClick={calenderToggleHandler}
        >
          {FilterState.date.toLocaleDateString()}
          <span className="calender-icon">
            <CalendarMonthIcon />

            {isCalenderShown && (
              <DatePicker
                selected={FilterState.date}
                onChange={(e) =>
                  FilterDispatch({
                    type: "DATE",
                    payload: e,
                  })
                }
                className="date-picker"
              />
            )}
          </span>
        </h4>
      </div>
      <div className="filter-item">
        <h5 className="filter-title grey-text">Price</h5>

        <div>
          <select
            className="dropdown"
            value={FilterState.price}
            onChange={(e) =>
              FilterDispatch({
                type: "PRICE",
                payload: e.target.value,
              })
            }
          >
            {prices.map((price) => {
              return (
                <option key={price} value={price} className="dropdown-content">
                  {price}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="filter-item">
        <h5 className="filter-title grey-text">Property Type</h5>

        <div>
          <select
            className="dropdown"
            value={FilterState.propertyType}
            onChange={(e) =>
              FilterDispatch({
                type: "PROPERTY_TYPE",
                payload: e.target.value,
              })
            }
          >
            {propertyTypes.map((propertyType) => {
              return (
                <option
                  key={propertyType}
                  value={propertyType}
                  className="dropdown-content"
                >
                  {propertyType}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="filter-item">
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="filter-item clear-filter no-border">
        <button
          onClick={(e) =>
            FilterDispatch({
              type: "CLEAR_ALL",
              payload: e,
            })
          }
          className="btn btn-outline-primary"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export { Filter };
