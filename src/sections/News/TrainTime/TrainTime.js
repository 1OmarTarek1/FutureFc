
import {  TrainTimeCard, SectionHeader, SectionWrapper, SecondaryBtn } from '../../../components'

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
        <div className='TrainTime-page' id='TrainingTime'>
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
                    <SecondaryBtn >
                        <Link to="/Training">
                            التدريب 
                        </Link>
                    </SecondaryBtn>
                </div>
        </SectionWrapper>
        </div>
        </>
    )
}


export default TrainTime