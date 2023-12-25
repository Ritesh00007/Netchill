import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <header className='banner' style = {{
        backgroundSize: "cover",
        backgroundImage: 'url("https://ih1.redbubble.net/image.4675682213.5794/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.jpg")',
        backgroundPosition: "center"
    }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
      </div>
      
    </header>
  )
}

export default Banner
