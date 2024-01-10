import './Training.css'
import { MostPopularLiveStream, TrainTime, AboutCoaches } from '../../sections'




const Training = () =>{
    return(
    <>
        <div className='trainingPage'>
            <AboutCoaches />
            <MostPopularLiveStream />
            <TrainTime />
        </div>
    </>
    )
}


export default Training