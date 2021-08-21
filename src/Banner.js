import { useEffect, useState } from 'react';
import React from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie)

  return (
    <header
      className='h-96 p-6 relative'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
        
      }}
    >
      <div className='flex flex-col'>
        <div className="z-0 bg-gradient-to-t from-black absolute w-full h-96 left-0 top-0"></div>
        <h1 className='z-10 text-4xl mb-4 text-white font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='flex gap-2 mb-4'>
          <button className="z-10 py-2 px-4 rounded font-bold bg-white bg-opacity-75 hover:text-white hover:font-bold hover:bg-gray-600 hover:bg-opacity-80">
            Play
          </button>
          <button className="z-10 py-2 px-4 rounded text-white font-bold bg-gray-600 bg-opacity-80 hover:bg-white hover:bg-opacity-75 hover:text-black">
            My List
          </button>        
        </div>
        <p className='z-10 text-white'>{movie?.overview}</p>
      </div>
      
    </header>
  )
};

export default Banner;
