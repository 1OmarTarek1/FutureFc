import { SectionHeader, SectionWrapper, BestPlayerCard } from '../../components'
import  BestPlayersData from '../../Data/BestPlayersData' 
import Slider from "react-slick";

import './Players.css'


import React from 'react'

const Players = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    const cards = BestPlayersData.map(card => {
        return <BestPlayerCard 
                key   = { card.id    } 
                image = { card.image } 
                name  = { card.name  } 
                team  = { card.team  } 
                club  = { card.club  } 
                text  = { card.text  } 
        />
    }) 

return (
    <>
    <div className='players' id='PlayersGo' style={{marginTop:"var(--margin-primary)"}}>
    <SectionWrapper>
        <SectionHeader>انتقالات اللاعبين</SectionHeader>
        <div className='bestPlayersCards'>
            <Slider {...settings}>
                {cards}
            </Slider>
        </div>
    </SectionWrapper>
    </div>
    </>
  )
}

export default Players