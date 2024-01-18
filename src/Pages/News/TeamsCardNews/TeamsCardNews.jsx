import { Card } from '../../../components'
import   MostPopularData from '../../../Data/mostPopularData'
// import Slider from "react-slick";
import './TeamsCardNews.css'

const TeamsCardNews = () => {
    const cards = MostPopularData.map(card => {
        return <Card 
        key         =   {  card.id        } 
        idLocation  =   {  card.idLocation}
        image       =   {  card.image     } 
        title       =   {  card.title     } 
        category    =   {  card.category  } 
        rate        =   {  card.rate      } 
        download    =   {  card.download  } 
        to_path     =   {  card.to_path   } 
        newsPath    =   {  card.newsPath  } 
        />})
        // var settings = {
        //     dots: true,
        //     infinite: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        //     pauseOnHover: true,
        //     rtl: true,
        //     // responsive: [
        //     //     {
        //     //         breakpoint: 1024,
        //     //         settings: {
        //     //         slidesToShow: 2,
        //     //         slidesToScroll: 2,
        //     //         infinite: true,
        //     //         dots: true
        //     //         }
        //     //     },
        //     //     {
        //     //         breakpoint: 600,
        //     //         settings: {
        //     //         slidesToShow: 2,
        //     //         slidesToScroll: 2,
        //     //         initialSlide: 2
        //     //         }
        //     //     },
        //     //     {
        //     //         breakpoint: 480,
        //     //         settings: {
        //     //         slidesToShow: 1,
        //     //         slidesToScroll: 1
        //     //         }
        //     //     }
        //     // ]
        // };
    return (
        <>
            <div className="teamCardNews">
            {/* <Slider {...settings}> */}
                {cards}
            {/* </Slider> */}
            </div>
        </>
    )
}

export default TeamsCardNews