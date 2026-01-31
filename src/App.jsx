import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Filmhouses from './Components/Filmhouses'
import Generemovielist from './Components/Generemovielist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

 <div className="bg-[#201648]  text-white">
  <Header/>
  <Slider/>
  <Filmhouses/>
  
      </div>
      <div className="bg-[#201648]  text-white">



<Generemovielist/>

      </div>









    </div>
   
  )
}

export default App
