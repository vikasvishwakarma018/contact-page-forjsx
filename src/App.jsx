import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Froms from './components/froms/Froms'
import contactHeader from './components/froms/ContactHeader';
function App() {

  return (
    <>
   <Navbar/>
  
  <div className="container flex relative left-20">
   <div className="left w-1/2 items-center justify-between ">
   <ContactHeader />
   <ContactForm />
     </div>
    
 
    {/* right side to onlin banner png  */ }
      
    <div className="right w-1/2 absolute right-7">
    <img className='h-[400px] w-[490px]'  src="./images/banner.png " alt="banner.pg" /></div>
    </div>
    </>
  )
}

export default App
