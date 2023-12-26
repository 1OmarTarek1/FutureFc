
import EmblaCarousel from './EmblaCarousel'
import { Link } from 'react-router-dom'

import PrimaryButton from '../../../components/Buttons/Buttons'
import logo from '../../../assets/images/logoHead.png' 

import '../css/sandbox.css'
import '../css/embla.css'
import '../css/heroIn.css'


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Main = () => {
    return (
      <main className="sandbox">
        <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          
          <div className='hero-text'>
            <div className='img-wrapper'>
              <img src={logo} alt='Future Logo' data-aos="zoom-out" data-aos-duration="1500" />
            </div>
            <h4 className='hero-title'>
              Future <span style={{color: "var(--color-primary)"}}>FC</span>
            </h4>
            <h6 className='hero-subtitle text-white'>معا لنصنع افضل اللاعبين</h6>  
            <PrimaryButton><Link to="/Contact">اشترك الان</Link></PrimaryButton>
          </div>

        </section>
    </main>
    )
  }

export default Main
