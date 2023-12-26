import React from 'react'
// import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import '../css/sandbox.css'
import '../css/embla.css'
import '../css/heroIn.css'



const OPTIONS = { loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Main = () => {
    return (
      <main className="sandbox">
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </main>
    )
  }

export default Main
