import { locationObj, propertyTypeObj } from "../utils/typeFilter";

export const locations = ["All locations", ...Object.keys(locationObj)];
export const propertyTypes = [
  "All Properties",
  ...Object.keys(propertyTypeObj),
];
export const prices = ["All Prices", "500-2500", "2500-5000", "5000+"];
