
import './Home.css'


import {  Hero, MostPopular, GamingLibrary, TrainTime  } from '../../sections'







const Home = () =>{

    return(
        <>
        <div id='home'>
            <Hero />
            <MostPopular />
            <GamingLibrary />
            <TrainTime />
        </div>
        </>
    )
}


export default Home