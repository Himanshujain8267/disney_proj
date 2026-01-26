import React, { useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const image_base_url = "https://image.tmdb.org/t/p/original"
function Slider() {
const [movielist,setmovielist]= useState([]) ;
const elementref = useRef();
useEffect(()=>{
getTrendingMovies()
},[])
const getTrendingMovies = ()=>{
    GlobalApi.getTrendingvideos.then(resp=>{
console.log(resp.data.results) ;
setmovielist(resp.data.results) ;
    })
}
const SliderRight = (element)=>{
    element.scrollLeft+=window.innerWidth - 110;
}
const SliderLeft = (element)=>{
    element.scrollLeft-=window.innerWidth -110;
}
return (
     <div className="border-0">
    <HiChevronLeft className="hidden md:block text-[30px] absolute mx-[1vw] mt-[25vh] cursor-pointer" onClick={()=>{
        SliderLeft(elementref.current)
    }}/>
    <HiChevronRight className="hidden md:block  text-[30px] absolute mx-[1vw] right-0 mt-[25vh] cursor-pointer" onClick={()=>{
        SliderRight(elementref.current)
    }}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementref}>
        

{
    movielist.map((item,idx)=>(
<img key={idx} src={ image_base_url+item.backdrop_path} alt=""
className='min-w-full md:h-[50vh] object-cover object-top-left mr-5 rounded-2xl hover:border-2 hover:border-white-400 hover:shadow-[0_0_15px_#22d3ee] transition ease-in'
/>
    ))
}



    </div>


    </div>
  )
}

export default Slider