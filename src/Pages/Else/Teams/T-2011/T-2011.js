import './T-2011.css'
import '../MainTeams.css'

import MainTeams from '../MainTeams'
import { Team2011 } from '../../../../sections'
// import TrainTimeData from '../../../../Data/TrainTimeData'



const T_2011 = () => {
    
    return(
    <>
        <div className='topSideTeam'>
                <Team2011 />
        </div>
        <MainTeams />
    </>
    )
}

export default T_2011