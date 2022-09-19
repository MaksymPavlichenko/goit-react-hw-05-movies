import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'a689f712572f24483fe422c2558207e7';

export const axiosTrendingMovies = async () => {
    const res = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  
    return res.data;
  };
  
  export const axiosSearchMovies = async searchQuery => {
    const res = await axios(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`
    );
  
    return res.data;
  };
  
  export const axiosMovieDetails = async id => {
    const res = await axios(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  
    return res.data;
  };
  
  export const axiosMovieCredits = async id => {
    const res = await axios(`/movie/${id}/credits?api_key=${API_KEY}`);
  
    return res.data;
  };
  
  export const axiosMovieReviews = async id => {
    const res = await axios(`/movie/${id}/reviews?api_key=${API_KEY}&page=1`);
  
    return res.data;
  };