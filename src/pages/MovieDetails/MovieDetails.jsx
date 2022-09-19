import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { axiosMovieDetails } from 'Api/Api';
import AddInfo from 'components/AddInfo/AddInfo';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const navigateBack  = useNavigate();

    useEffect(() => {
        axiosMovieDetails(movieId).then(detail => {
            setMovieDetail(detail);
        });
    }, [movieId]);

    const buttonBackHandler = () => {
        navigateBack('/');
    };

    return (
        <>
            {movieDetail && (
                <div>
                    <button type="button" onClick={buttonBackHandler}>
                        Go back
                    </button>

                    <MovieInfo data={movieDetail} />

                    <AddInfo id={movieId} />
                </div>
            )}
            <Outlet />
        </>
    );
};

export default MovieDetails;