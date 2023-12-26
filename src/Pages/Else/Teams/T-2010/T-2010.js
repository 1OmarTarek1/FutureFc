import './T-2010.css'
import '../MainTeams.css'

import MainTeams from '../MainTeams'
import { Team2010 } from '../../../../sections'
// import TrainTimeData from '../../../../Data/TrainTimeData'



const T_2010 = () => {
    
    return(
    <>
        <div className='topSideTeam'>
                <Team2010 />
        </div>
        <MainTeams />
    </>
    )
}

export default T_2010