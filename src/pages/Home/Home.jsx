import { useState, useEffect } from 'react';
import { axiosTrendingMovies } from 'Api/Api';
import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
    const [trendMovies, setTrendMovies] = useState(null);

    useEffect(() => {
        axiosTrendingMovies().then(({ results }) => {
            setTrendMovies(results);
        });
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            {trendMovies && <MovieList data={trendMovies} />}
        </>
    );
};

export default Home;