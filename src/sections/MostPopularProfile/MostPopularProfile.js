
import { ProfileStream } from '../../sections/'
import { MostPopularProfileCard, SectionHeader, SectionWrapper } from '../../components/index'
import   MostPopularProfileData from '../../Data/MostPopularProfileData'

import './MostPopularProfile.css'


const MostPopularProfile = () =>{
const cards = MostPopularProfileData.map(card => {
    return <MostPopularProfileCard key={card.id} image={card.image} title={card.title} view={card.view} />
}) 



    return(
        <>
        <div className='profileMainPage'>
        <ProfileStream />

            <SectionWrapper>
                <SectionHeader>
                    <span className='clips-title'>
                        اهم البطولات 
                        <em> الفردية </em> 
                    </span>
                </SectionHeader>

                <div className='most-profile-items'>
                    {cards}
                </div>

            </SectionWrapper>         
        </div>
        </>
    )
}

export default MostPopularProfile