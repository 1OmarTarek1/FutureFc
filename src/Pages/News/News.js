

import { TrainTime, HowStartLive, MostPopularLive,TopStreamers, Players } from '../../sections'
import { FirstNews } from '../../sections/MostPopular'
import './News.css'



const News = () =>{


    return(
    <div id='News' className='NewsPage'>
        <div className='featuredGames-and-downloadedGames'>
            <FirstNews /> 
            <HowStartLive />
        </div>
        <TopStreamers />
        <MostPopularLive />
        <Players />
        <TrainTime/>
    </div>
    )
}


export default News