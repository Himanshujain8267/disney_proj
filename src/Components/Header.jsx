import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2" 
import { HiPlus,HiDotsHorizontal, HiDotsVertical } from 'react-icons/hi'
import Headericons from './Headericons'
function Header() {

const menu = [
{
    name:'HOME',
    icon:HiHome
},
{
    name:'SEARCH',
    icon:HiMagnifyingGlass
},
{
    name:'WATCH LIST',
    icon:HiPlus
},
{
    name:'ORIGINAL',
    icon:HiStar
},
{
    name:'MOVIES',
    icon:HiPlayCircle
},
{
    name:' SERIES',
    icon:HiTv
}
]

const [toggle,setToggle] = useState(false);
  const handleMouseOver = () =>{
     setToggle(true);
    }
  const handleMouseLeave = () =>{
     setToggle(false);
    }
  return (
    <div className="flex items-center justify-between p-5 ">

    <div className=" flex align-middle items-center gap-10" >
<img src={logo} alt="" className="h-[10vh] w-auto" />

<div className="hidden md:flex gap-8">

{
    menu.map((e,idx)=>(
        <Headericons key={idx} name={e.name} Icon={e.icon}/>
    ))
}
</div>
<div className="flex gap-8 md:hidden">

{
    menu.map((e,idx)=>idx<3&&(
        <Headericons key={idx} name={''} Icon={e.icon}/>
    ))
}

</div>
<div className="md:hidden"   onMouseLeave={()=>{handleMouseLeave()}} >
          <div  onMouseOver={()=>{handleMouseOver()}}><Headericons  name={''}  Icon={HiDotsVertical} /></div>
        {toggle?<div className="absolute mt-3 bg-[#3b3557] h-[12vh] w-[17vw] flex flex-col justify-center items-left ">
{
    menu.map((e,idx)=>idx>2&&(
        <Headericons key={idx} name={e.name} Icon={e.icon}/>
    ))
}

</div>:null}  
  </div>
</div>
<img  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className=' w-12.5 h-10 rounded-full' />


</div>
  )
}

export default Header