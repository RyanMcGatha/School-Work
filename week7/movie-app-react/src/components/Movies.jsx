import { useState, useEffect } from "react";

function Movies() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState({});
  const fetchData = async () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2f6dff46";
    const apiData = await fetch(url).then((response) => response.json());
    setData(apiData.data.Movies);
    console.log(response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>hello</h1>
      {data.map((item) => {
        return <MovieDetail></MovieDetail>;
      })}
    </>
  );
}

export default Movies;
