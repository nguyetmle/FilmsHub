import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../firebase/axios'

function Row({title, fetchUrl, isLargeRow=false}) { //pass in props 
  const [movies, setMovies] = useState([]);
  const base_url = "https://images.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map((movie) => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <div className='row__posterCard'>
                  <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name} />
                    
                    <div className='row__posterCover'>
                      <div className="row__posterName">
                          {movie.title || movie.name || movie.original_name}
                        </div>
                        <div className="row__posterDescription">
                            {movie.overview}
                        </div>
                    </div>
              </div>
        
              
          )
        ))}
      </div>
    </div>
  );
}

export default Row