// This is calling a local file,
// but the syntax is pretty much the same as a remote URL
const getJSON = async () => {
  const data = await fetch("./data/flight_logs.json").then((response) =>
    response.json()
  );
  return data;
};

// We can makle the anonymous callback function async
// then we can use await to get our array
document.addEventListener("DOMContentLoaded", async () => {
  const myArray = await getJSON();
  console.log(myArray);

  // Sort and return the data based on the airline
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects
  const sortedArray = myArray.slice();
  console.log("sortedddd", sortedArray);
  sortedArray.sort((a, b) => {
    const airlineA = a.airline.toUpperCase();
    const airlineB = b.airline.toUpperCase();
    if (airlineA < airlineB) {
      return -1;
    }
    if (airlineA > airlineB) {
      return 1;
    }

    return 0;
  });
  // Sort and return the data based on the arrival airport
  const sortedArrivlArray = myArray.slice();
  sortedArrivlArray.sort((a, b) => {
    const arrivalA = a.arrival_airport;
    const arrivalB = b.arrival_airport;

    if (arrivalA < arrivalB) {
      return -1;
    }
    if (arrivalA > arrivalB) {
      return 1;
    }
    return 0;
  });
  sortedArrivlArray.map((airport) => console.log(airport.sortedArray));
  // Filter out everything but the flights made by Delta, return the new data
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#filtering_invalid_entries_from_json
  const filteredArray = myArray.filter((flight) => {
    if (flight.airline === "United") {
      return true;
    }
    return false;
  });
  console.log(filteredArray);
  filteredArray.map((flight) => console.log(flight.airline));
  // Do the same as before, but try doing it with reduce() instead of filter
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#sum_of_values_in_an_object_array
});
