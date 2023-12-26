import './MostPopularLiveStream.css'
import { SectionHeader, TrainingPlan} from '../../../components'





const MostPopularLiveStream = () =>{

    return(
        <>
        <div className='most-pop-live'id='TrainingPlan'>
            <SectionHeader>
                <span className='live-title'>
                    الخطة <em>التدريبية</em> 
                </span>
            </SectionHeader>
            <TrainingPlan />
        </div>
        </>
 
    )
}

export default MostPopularLiveStream