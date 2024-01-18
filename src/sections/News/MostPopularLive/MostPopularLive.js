
import { Card, SectionHeader, SectionWrapper } from '../../../components'
import   MostPopularData from '../../../Data/mostPopularData'


import './MostPopularLive.css'




const MostPopularLive = () =>{
    const cards = MostPopularData.map(card => {
        return <Card 
        key         =   {  card.id        } 
        idLocation  =   {  card.idLocation} 
        image       =   {  card.image     } 
        title       =   {  card.title     } 
        category    =   {  card.category  } 
        rate        =   {  card.rate      } 
        download    =   {  card.download  } 
        to_path     =   {  card.to_path   } 
        newsPath    =   {  card.newsPath  } 
        />})



    return(
        <>
        <div className='most-pop-live' id='TeamsNews'>
            <SectionWrapper>
                <SectionHeader>
                    <span className='live-title'>
                        اخبار <em>الفرق</em> 
                    </span>
                </SectionHeader>

                <div className='most-live-items'>
                    {cards}
                </div>
            </SectionWrapper>
            
        </div>
        </>
 
    )
}

export default MostPopularLive