
import './Home.css'


import { MostPopular, GamingLibrary, TrainTime  } from '../../sections'







const Home = () =>{

    return(
        <>
        <div id='home' className='homePage'>
                <MostPopular />
                <GamingLibrary />
                <TrainTime />
        </div>
        </>
    )
}


export default Home