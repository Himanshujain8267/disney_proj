import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';

function MovieList({genereId}) {

const [movielist,setmovielist]= useState([]) ;
useEffect(()=>{

getMovieByGenereId() ;

},[])



    const getMovieByGenereId=()=>{
GlobalApi.getMovieByGenereId(28).then(resp=>{
   console.log(resp)
   setmovielist(resp.data.results);
})
    }
  return (
    <div>
{
movielist.map((item,idx)=>(

<MovieCard movie={item}/>


))
}
    </div>
  )
}

export default MovieList