import React from 'react'
const image_base_url = "https://image.tmdb.org/t/p/original"
function MovieCard({movie}) {
  return (
    <>

<img src={image_base_url+movie.poster_path} alt="" 
 className='w-27.5 md:w-50 rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in' />

    </>
  )
}

export default MovieCard