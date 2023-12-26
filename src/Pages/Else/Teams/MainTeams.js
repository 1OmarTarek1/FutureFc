
import './MainTeams.css'


// RelatedGames
import { TrainTime, MostPopularLiveStream } from '../../../sections'




const MainTeams = () => {
    return(
        <>
        <div className='MainTeams'>
            <MostPopularLiveStream />
            <TrainTime/>
        </div>
        </>
    )
}

export default MainTeams