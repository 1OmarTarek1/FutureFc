
import Slider from "react-slick";

import { TopStreamersCard, SectionHeader, SectionWrapper } from '../../../components'

import { TopStreamersData } from '../../../Data/mostPopularData'
import './TopStreamers.css'


    
const TopStreamers = () => {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        };

const cards = TopStreamersData.map(card => {
    return <TopStreamersCard 
    key={card.id}  
    img={card.img}  
    title={card.title} 
    team={card.team} 
    teamPath={card.teamPath}/>
    }) 

    return(
        <>
        <div className='TopStreamers-page' id="BestPlayers">
        <SectionHeader>
            <span className='related-title'>
                <span>افضل</span> <em>اللاعبين</em>
            </span>
        </SectionHeader>
        <SectionWrapper>
        
                <ul className='download-games-items'>
                <Slider {...settings}>
                    {cards}
                </Slider>
                </ul>
        </SectionWrapper>
        </div>
        </>
    )
}



export default TopStreamers