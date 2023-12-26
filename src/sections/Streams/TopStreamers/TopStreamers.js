import './TopStreamers.css'



import { TopStreamersCard, SectionHeader, SectionWrapper } from '../../../components'

import { TopStreamersData } from '../../../Data/mostPopularData'

const TopStreamers = () =>{
const cards = TopStreamersData.map(card => {
    return <TopStreamersCard 
    key={card.id}  
    img={card.img}  
    title={card.title} 
    team={card.team} 
    teamPath={card.teamPath}/>
    }) 

    return(
        <>
        <div className='TopStreamers-page'>
        <SectionWrapper>
                <SectionHeader>
                    <span className='related-title'>
                        <span>افضل</span> <em>اللاعبين</em>
                    </span>
                </SectionHeader>
        
                <ul className='download-games-items'>
                    {cards}
                </ul>
        </SectionWrapper>
        </div>
        </>
    )
}


export default TopStreamers