import React from 'react'
// import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import '../css/sandboxTrain.css'
import '../css/emblaTrain.css'



const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const MainTrain = () => {
    return (
      <main className="sandbox">
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </main>
    )
  }

export default MainTrain
