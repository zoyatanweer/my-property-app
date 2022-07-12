import House from "../house";

export const locationObj = House.reduce(
  (obj, currentProperty) =>
    obj[currentProperty.location]
      ? obj
      : { ...obj, [currentProperty.location]: true },
  {}
);

export const propertyTypeObj = House.reduce(
  (obj, currentProperty) =>
    obj[currentProperty.propertyType]
      ? obj
      : { ...obj, [currentProperty.propertyType]: true },
  {}
);
