import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosSearchMovies } from 'Api/Api';
import MovieList from 'components/MoviesList/MoviesList';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('inputQuery') || '';
    
    const submitHandler = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.query.value;
        if (searchQuery.trim() === '') {
            alert('Input query!');
            return;
        }
        setSearchParams({ inputQuery: searchQuery });
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        axiosSearchMovies(query).then(({ results }) => {
            setMovies(results);
        });
    }, [query]);
    return (
        <div>
          <form onSubmit={submitHandler}>
            <input type="text" name="query" placeholder="Search movies" />
            <button type="submit">Search</button>
          </form>
    
          <MovieList data={movies} />
        </div>
      );
};

export default Movies;