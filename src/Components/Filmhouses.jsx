import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import disneyv from './../assets/videos/disney.mp4'
import marvelv from './../assets/videos/marvel.mp4'
import nationalGv from './../assets/videos/national-geographic.mp4'
import pixarv from './../assets/videos/pixar.mp4'
import starwarv from './../assets/videos/star-wars.mp4'

function Filmhouses() {

    
const houses = [
  { 
    id:1,
    name:disney,
    video:disneyv

 },
  { 
    id:2,
    name:marvel,
    video:marvelv

 },
  { 
    id:3,
    name:nationalG,
    video:nationalGv

 },
  { 
    id:4,
    name:pixar,
    video:pixarv

 },
  { 
    id:5,
    name:starwar,
    video:starwarv

 },
  
]
  return (
    <div className="flex gap-15 ml-12.5 mr-5.5 w-[93vw] ">
{
    houses.map((ele)=>(
       <div key={ele.id} className='relative max-w-full border-[3px] rounded-xl border-white m-2.5 hover:border-cyan-600 hover:rounded-2xl hover:cursor-pointer  hover:shadow-[0_0_15px_#22d3ee] '>
 <video src={ele.video} autoPlay loop playsInline muted className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-70 transition duration-200"/>
      
        <img src={ele.name} alt="" className='w-full z-1'/>
       </div>
    ))
}




    </div>
  )
}

export default Filmhouses