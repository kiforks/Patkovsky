const checkIn = document.querySelector(".booking__input--check-in");
const checkOut = document.querySelector(".booking__input--check-out");

function flatpickInit() {
  const dateToCheckIn = flatpickr(checkIn, {
    dateFormat: "d-m-Y",
    locale: 'uk'
  });

  const dateToCheckOut = flatpickr(checkOut, {
    dateFormat: "d-m-Y",
    locale: 'uk'
  });
}

if(checkIn && checkOut) {
  flatpickInit();
}
