export const checkRestaurantOpen = (openingHours, setRestaurantIsOpen) => {
  const now = new Date();
  const hours = now.getHours();
  hours < openingHours[1] && hours >= openingHours[0]
    ? setRestaurantIsOpen(true)
    : setRestaurantIsOpen(false);
};

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
