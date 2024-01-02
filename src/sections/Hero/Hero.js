
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


import PrimaryButton from '../../components/Buttons/Buttons'
import logo from '../../assets/images/logoHead.png' 
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'; // MDBCarouselCaption

import image1 from '../../assets/images/slide-1.jpg'
import image2 from '../../assets/images/slide-2.jpg'
import image3 from '../../assets/images/slide-3.jpg'
import image4 from '../../assets/images/slide-4.jpg'
import image5 from '../../assets/images/slide-5.jpg'

import './Hero.css'

const Hero = () =>{
    const location = useLocation().pathname ;

    useEffect(() => {
        let heroSection = document.querySelector(".hero-main");
        if ( location === "/") {
            heroSection.style.display = "block"
        }
        else {
            heroSection.style.display = "none"
        };
    }, [ location ])
    return(
        <div id='TopSideSubscribe' className='hero-main'>
            <MDBCarousel showIndicators showControls fade data-aos="fade">
                <MDBCarouselItem itemId={1}>

                    <img src={image4} className='d-block w-100' alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src={image2} className='d-block w-100' alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src={image3} className='d-block w-100' alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={4}>
                    <img src={image1} className='d-block w-100' alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={5}>
                    <img src={image5} className='d-block w-100' alt='...' />
                    {/* <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

            </MDBCarousel>  
            <div className='heroFilter'></div>
            <div className='hero-text '>
                <div className='img-wrapper'>
                    <img src={logo} alt='Future Logo' data-aos="zoom-out" data-aos-duration="1500" />
                    </div>
                    <h4 className='hero-title'>
                    Future <span style={{color: "var(--color-primary)"}}>FC</span>
                    </h4>
                    <h6 className='hero-subtitle text-white'>معا لنصنع افضل اللاعبين</h6>  
                    <PrimaryButton><Link to="/Contact">اشترك الان</Link></PrimaryButton>
            </div>    
        </div>
    )
}

export default Hero