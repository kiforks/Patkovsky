const checkIn = document.querySelector(".booking__input--check-in");
const checkOut = document.querySelector(".booking__input--check-out");

function flatpickInit() {
  const dateToCheckIn = flatpickr(checkIn, {
    dateFormat: "d-m-Y",
    locale: 'uk',
    // altInput: true,
    // altFormat: "F j, Y",
    minDate: "today",
  });

  const dateToCheckOut = flatpickr(checkOut, {
    dateFormat: "d-m-Y",
    locale: 'uk',
    // altInput: true,
    // altFormat: "F j, Y",
    minDate: "today",
  });
}

if(checkIn && checkOut) {
  flatpickInit();
}
