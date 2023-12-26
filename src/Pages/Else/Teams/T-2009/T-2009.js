import './T-2009.css'
import '../MainTeams.css'

import MainTeams from '../MainTeams'
import { Team2009 } from '../../../../sections'
// import TrainTimeData from '../../../../Data/TrainTimeData'



const T_2009 = () => {
    
    return(
    <>
        <div className='topSideTeam'>
                <Team2009 />
        </div>
        <MainTeams />
    </>
    )
}

export default T_2009