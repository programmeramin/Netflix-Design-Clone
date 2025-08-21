import React from 'react'

const Header = () => {
  return (
    <>
      
      <header className="w-[82%] m-auto">
          <div className="header py-4 flex justify-between items-center ">
            <div className="logo">
              <h1 className="text-red-600 font-bold text-5xl">NETFLIX</h1>
          </div>
             <div className="button">
              
             <button className="text-white text-xl bg-red-600 px-3 py-2 items-center cursor-pointer rounded-sm font-normal hover:bg-red-800 hover:transition-opacity">Sign In</button>
          
             </div>
          </div>
      </header>

    </>
  )
}

export default Header
