import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="container flex items-center justify-between space-x-2.5">
        <div className="logo mx-3 relative left-[100px] ">
            <img src="./images/logo.png" alt="" />
        </div>
        <div className="names space-x-40 mx-3 ">
            <ul className='flex space-x-9 items-center relative right-6'>
                <li className='cursor-pointer text-lg hover:text-blue-400 Hover:font-bold ' >Home</li>
                <li className='cursor-pointer text-lg hover:text-red-300 Hover:font-bold'>About</li>
                <li className='cursor-pointer  text-lg hover:text-purple-400  Hover:font-bold'>contact</li>
              
            </ul>
        </div>
      </div>
    </div>
  )
}
