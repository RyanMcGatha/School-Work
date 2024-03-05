import { useEffect, useState } from "react";

function Movies() {
  const [MovieData, setMovieData] = useState([0]);
  const fetchData = async () => {
    const apiUrl =
      "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";
    const apiData = await fetch(apiUrl).then((response) => response.json());
    setMovieData(apiData.MovieData.LookUpForm.edges);
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(Movies);

  return (
    <>
      <div className="searchBar">
        <label>
          Search For Movie
          <input className="searchBarInput" type="text" />
        </label>
      </div>
    </>
  );
}

export default Movies;
