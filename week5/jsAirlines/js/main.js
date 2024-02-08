"use strict";

const getJSON = async () => {
  const data = await fetch(
    "https://my.api.mockaroo.com/flight_logs.json?key=5776e910"
  ).then((response) => response.json());
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  const mainArray = await getJSON();
  console.log(mainArray);

  const airline = document.querySelector("#airSelect");
});
