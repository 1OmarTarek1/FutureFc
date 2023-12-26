import './Training.css'
import {  TopStreamers, LiveStreams, MostPopularLiveStream, TrainTime } 
from '../../sections'



const Training = () =>{
    return(
    <>
    <div className='Streams-and-Streamers'>
        <LiveStreams />
        <TopStreamers />
    </div>
        <MostPopularLiveStream />
        <TrainTime />
    </>
    )
}


export default Training