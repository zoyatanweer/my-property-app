export const filterByLocation = (data, location) => {
  switch (location) {
    case "Highland Lake, FL":
      return data.filter((House) => House.location === "Highland Lake, FL");
    case "Palm Harbour, TX":
      return data.filter((House) => House.location === "Palm Harbour, TX");
    case "Michigan, IN":
      return data.filter((House) => House.location === "Michigan, IN");

    default:
      return data;
  }
};

export const filterByDate = (data, date) => {
  return data.filter((House) => new Date(House.availabilityDate) >= date);
};

export const filterByPrice = (data, price) => {
  switch (price) {
    case "500-2500":
      return data.filter((House) => House.price >= 500 && House.price < 2500);
    case "2500-5000":
      return data.filter((House) => House.price >= 2500 && House.price < 5000);
    case "5000+":
      return data.filter((House) => House.price >= 5000);
    default:
      return data;
  }
};

export const filterByPropertyType = (data, propertyType) => {
  switch (propertyType) {
    case "House":
      return data.filter((House) => House.propertyType === "House");
    case "Villa":
      return data.filter((House) => House.propertyType === "Villa");
    default:
      return data;
  }
};

export const filterBySearch = (data, search) => {
  return data.filter((House) => {
    const title = House.title.toLowerCase();
    const address = House.address.toLowerCase();

    if (title.search(search) >= 0 || address.search(search) >= 0) {
      return true;
    } else {
      return false;
    }
  });
};
