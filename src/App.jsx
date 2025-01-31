import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { TypingAnimation } from './components/UI/TypingAnimation'
import Main from './components/Main'
import GlobeDemo from './components/GlobeDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className='absolute top-20 left-10 ' >
      <GlobeDemo/>
    </div>
    <div>
      <Navbar/>
      <Main/>
      <hr className='w-[80%] m-auto text-black h-[10px]'/>
    </div>
    </>
  )
}



export default App
