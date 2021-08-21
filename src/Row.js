import { useState, useEffect } from 'react';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="bg-black">
      <h2 className="ml-4 text-white font-bold text-xl">{title}</h2>
      <div className="ml-4 p-6 flex gap-3 overflow-y-hidden overflow-x-scroll scro">
        {
          movies.map(movie => (
          <img 
          key={movie.id}
          className={`rounded object-contain max-h-28 transform transition-transform hover:scale-105 ${isLargeRow && 'max-h-56 hover:scale-110'}`} 
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name}/>)
          )}
      </div>
    </div>
  )
}

export default Row;
