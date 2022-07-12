import { createContext, useContext, useReducer, useState } from "react";

const initialData = {
  price: "All prices",
  location: "All locations",
  availabiltyDate: "",
  date: new Date("1 July 2022"),
  propertyType: "All properties",
  search: "",
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [FilterState, FilterDispatch] = useReducer(
    filterReducerFunc,
    initialData
  );
  return (
    <FilterContext.Provider value={{ FilterState, FilterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

const filterReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        price: "All prices",
        location: "All locations",
        availabiltyDate: "",
        date: new Date("1 July 2022"),
        propertyType: "All properties",
        search: "",
      };
    case "LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "PROPERTY_TYPE":
      return {
        ...state,
        propertyType: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
