import './About.css'
import React from 'react'

import { AboutCoaches, Future, Academy, Players } from '../../../sections'

const About = () => {
  return (
    <>
      <Future />
      <Academy />
      <AboutCoaches />
      <Players />
    </>
  )
}

export default About