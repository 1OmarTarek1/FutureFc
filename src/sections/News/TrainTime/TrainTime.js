
import {  TrainTimeCard, SectionHeader, SectionWrapper, PrimaryBtn } from '../../../components'

import TrainTimeData from '../../../Data/TrainTimeData'
import { Link } from 'react-router-dom'
import './TrainTime.css'

const TrainTime = () =>{
    const cards = TrainTimeData.map(card => {
        return <TrainTimeCard 
        key         =  { card.id        } 
        image       =  { card.image     } 
        title       =  { card.title     } 
        category    =  { card.category  } 
        rate        =  { card.rate      } 
        download    =  { card.download  } 
        to_path     =  { card.to_path   }
        />
        }) 

    return(
        <>
        <div className='TrainTime-page' id='TrainingTime' data-aos="fade">
            <SectionWrapper>
                <SectionHeader>
                    <span className='related-title'>
                        <span>مواعيد</span> <em>التدريب</em>
                    </span>
                </SectionHeader>
        
                <div className='training-time-cards'>
                    {cards}
                </div>

                <div className='view-all-games'>
                    <PrimaryBtn >
                        <Link to="/Training">
                            التدريب 
                        </Link>
                    </PrimaryBtn>
                </div>
            </SectionWrapper>
        </div>
        </>
    )
}


export default TrainTime