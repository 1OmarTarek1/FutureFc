

import { TrainTime, HowStartLive, MostPopularLive,TopStreamers,LiveStreams, Players } from '../../sections'
import { FirstNews } from '../../sections/MostPopular'
import './News.css'



const News = () =>{


    return(
    <div id='News' className='NewsPage'>
        <div className='featuredGames-and-downloadedGames'>
            <FirstNews /> 
            <HowStartLive />
        </div>
        <MostPopularLive />

        <div className='news-best-players' id='BestPlayers'>
            <LiveStreams />
            <TopStreamers />
        </div>
        <Players />
        <TrainTime/>
    </div>
    )
}


export default News