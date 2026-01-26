import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';

function MovieList({genereId}) {

const [movielist,setmovielist]= useState([]) ;
useEffect(()=>{

getMovieByGenereId() ;

},[])


// Make the movie list horizontal using flexbox
// Add a container style for horizontal scrolling

    const getMovieByGenereId=()=>{
GlobalApi.getMovieByGenereId(28).then(resp=>{
   console.log(resp)
   setmovielist(resp.data.results);
})
    }
  return (
    <div className={"flex overflow-x-auto gap-4 py-2"} >
{
movielist.map((item,idx)=>(

<MovieCard movie={item}/>


))
}
    </div>
  )
}

export default MovieList