import axios from "axios"

const movieBaseUrl="https://api.themoviedb.org/3/movie"
const api_key = "1b26b28f7294e04693d6048543d0f180"

const getTrendingvideos=axios.get(movieBaseUrl+"/popular?api_key="+api_key)
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=' + api_key ;

// https://api.themoviedb.org/3/discover/movie?api_key=1b26b28f7294e04693d6048543d0f180&with_genres=28
 const getMovieByGenereId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
getTrendingvideos,
getMovieByGenereId
}