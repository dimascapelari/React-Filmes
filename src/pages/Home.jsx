import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  //   console.log(moviesURL, apiKey);
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    console.log("topRatedURL", topRatedURL);
    getTopRatedMovies(topRatedURL);
  }, []);

  //   console.log("topMovies", topMovies);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {/* {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)} */}
      </div>
    </div>
  );
};

export default Home;
