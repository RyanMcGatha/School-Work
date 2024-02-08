"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("CONTENT LOADED");
  const greeting = document.createElement("h1");
  const root = document.querySelector("#root");

  greeting.textContent = "Hello World";
  root.append(greeting);

  function get(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "SeanIsRad/3.0",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Now that I have data, I can throw it into a callback
        return data;
      });
  }

  function showArtist(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data.name;
    root.appendChild(paragraph);
  }

  function getReleases(url) {
    get(url).then(function (data) {
      const { releases } = data;
      console.log(releases);
      releases.map(function (releases) {
        const { title } = releases;
        const paragraph = document.createElement("p");
        paragraph.textContent = title;
        root.appendChild(paragraph);
      });
    });
  }

  // add an IFFE statement

  (function () {
    get("  https://api.discogs.com/artists/52835").then(function (data) {
      const { name, releases_url } = data;
      const { releases } = data;
      showArtist(name);
      getReleases(releases);
    });
  })();
});
