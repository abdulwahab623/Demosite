import React from 'react'
import lapi from './images/lapi.jpg'

import Common from './Common'

const Home = () => {
  return (
    <>
    <Common  
    name="Grow your bussiness with " 
    imgsrc={lapi}
    visit="/service" 
    btname="Get Started"/>
    </>
  )
}

export default Home
