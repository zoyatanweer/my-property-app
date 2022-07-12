import React, { useContext } from "react";
import House from "../../house";
import { Filter } from "../Filter/Filter";
import { FilterContext, useFilter } from "../../context/FilterContext";
import { locations } from "../../constants/location";
import {
  filterByDate,
  filterByLocation,
  filterByPrice,
  filterByPropertyType,
  filterBySearch,
} from "../../utils/filterFunctions";
import {
  ArrowDownIcon,
  BathtubIcon,
  BedIcon,
  DimensionIcon,
  FavoriteIcon,
} from "../../Assets/allsvg";
import "./Homepage.css";

const Homepage = () => {
  const { FilterState, FilterDispatch } = useFilter();

  const sortByLocationData = filterByLocation(House, FilterState.location);
  const sortByDateData = filterByDate(sortByLocationData, FilterState.date);
  const sortByPriceData = filterByPrice(sortByDateData, FilterState.price);
  const sortByPropertyTypeData = filterByPropertyType(
    sortByPriceData,
    FilterState.propertyType
  );
  const sortBySearchedData = filterBySearch(
    sortByPropertyTypeData,
    FilterState.search
  );

  return (
    <div className="main-page-content">
      <div className="heading-section">
        <h1>Search properties to rent</h1>
        <div className="searchbar-section">
          <input
            type="text"
            placeholder="Search with SearchBar"
            className="searchbar"
            value={FilterState.search}
            onChange={(e) => {
              FilterDispatch({
                type: "SEARCH",
                payload: e.target.value.trim().toLocaleLowerCase(),
              });
            }}
          ></input>
          <ArrowDownIcon className="searchbar-dropdown-icon" />
        </div>
      </div>
      <Filter />
      <div className="card-section">
        {sortBySearchedData.length > 0 ? (
          sortBySearchedData.map((house) => {
            return (
              <div className="card-container">
                <div className="img-container">
                  <img src={house.img} alt="house" className="card-img"></img>
                </div>
                <div className="card-badge">Popular</div>
                <div className="card-title">
                  <h1 className="card-price-section">
                    <div className="card-price">
                      <span className="text-blue fs-4">${house.price}</span>
                      <span className="grey-text fs-6">/month</span>
                    </div>
                    <span className="favourite-container">
                      <FavoriteIcon className="card-icons favourite" />
                    </span>
                  </h1>
                  <h1 className="card-name fs-4">{house.title}</h1>
                  <p className="card-address grey-text">{house.address} </p>
                </div>
                <div className="division"></div>
                <div className="card-details">
                  <span className="card-details-items">
                    <BedIcon className="card-icons" />
                    {house.beds}beds
                  </span>
                  <span className="card-details-items">
                    <BathtubIcon className="card-icons" />
                    {house.bathrooms}bathrooms
                  </span>
                  <span className="card-details-items">
                    <DimensionIcon className="card-icons" />
                    {house.dimension}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <h2>
            Please select valid Location, Date, Price and Property type to view
            desired results.
          </h2>
        )}
      </div>
    </div>
  );
};

export { Homepage };
