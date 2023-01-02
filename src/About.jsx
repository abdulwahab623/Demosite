import React from 'react'
import Common from './Common'
import well from "./images/well.jpg"


const About = () => {
  return (
    <>
    <Common  
    name="welcome to About page " 
    imgsrc={well}
    visit="/contact" 
    btname="Contact Now"/>
    </>
  )
}

export default About
