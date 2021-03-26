// Takes an array of 2 numbers and checks if the current hour lies between them
export const checkRestaurantOpen = (openingHours, setRestaurantIsOpen) => {
  const now = new Date();
  const hours = now.getHours();
  hours < openingHours[1] && hours >= openingHours[0]
    ? setRestaurantIsOpen(true)
    : setRestaurantIsOpen(false);
};

// Takes an array of two numbers and converts them into a nice 24hour string
export const formatOpenTimes = (openingHours) => {
  let openHour = openingHours[0];
  let openMinute = "00";
  let closeHour = openingHours[1];
  let closeMinute = "00";
  if (Math.floor(openingHours[0]) !== openingHours[0])
    openMinute = (openHour - Math.floor(openingHours[0])) * 60;
  openHour = Math.floor(openingHours[0]);
  if (Math.floor(openingHours[1]) !== openingHours[1])
    closeMinute = (closeHour - Math.floor(openingHours[1])) * 60;
  closeHour = Math.floor(openingHours[1]);

  return `${openHour}:${openMinute} - ${closeHour}:${closeMinute}`;
};

// Changes a string to url slug format
export const toUrlSlug = (string) => {
  return string.toLowerCase().split(" ").join("-");
};

// Checks if a postcode is valid
export function isValidPostcode(postcode) {
  var postcodeRegEx = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  return postcodeRegEx.test(postcode);
}

// Filters the list of restaurants depending on which postcode they deliver to
export const filterCuisines = (postcode, cuisines) => {
  const filteredCuisines = [];
  for (const cuisine of cuisines) {
    const filteredCuisine = { ...cuisine };
    const filteredRestaurants = filteredCuisine.restaurants.filter(
      (restaurant) => {
        for (let deliversTo of restaurant.postcodes) {
          if (deliversTo.includes(postcode.slice(0, 3).toUpperCase()))
            return restaurant;
        }
        return null;
      }
    );
    filteredCuisine.restaurants = filteredRestaurants;
    filteredCuisines.push(filteredCuisine);
  }

  return filteredCuisines;
};
