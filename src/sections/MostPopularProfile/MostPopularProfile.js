
import { ProfileStream } from '../../sections/'
import { MostPopularProfileCard, SectionHeader, SectionWrapper, PrimaryBtn } from '../../components/index'
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
                        Your Most Popular <em>Clips</em> 
                    </span>
                </SectionHeader>

                <div className='most-profile-items'>
                    {cards}
                </div>

                <div className='btn-load'>
                    <PrimaryBtn>
                        Load More Clips
                    </PrimaryBtn>
                </div>
            </SectionWrapper>         
        </div>
        </>
    )
}

export default MostPopularProfile