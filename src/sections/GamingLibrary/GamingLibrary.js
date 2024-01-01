import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader, SectionWrapper, PrimaryBtn } from '../../components/index'
import  TeamsData  from '../../Data/TeamsData'

import { FaFutbol } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const GamingLibrary = () => {

    const cards = TeamsData.map(card => {
        return <GamingLibraryCard 
        key          = {  card.id            } 
        title        = {  card.title         } 
        image        = {  card.image         } 
        category     = {  card.category      } 
        trophyWin    = {  card.trophyWin     } 
        trophyPlayed = {  card.trophyPlayed  } 
        trophy       = {  card.trophy        } 
        to_path      = {  card.to_path       } 
        />
    }) 
    


    return(
        <>
        <div    className='section-media'
                id='SomeTeams'
                data-aos="fade">
            <SectionWrapper>
                <span className='media-gm-title'>
                    <SectionHeader> <FaFutbol style={{fontSize:"45px" }}/> بعض الفرق <em>الحالية</em> </SectionHeader>
                </span>
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
            <PrimaryBtn>
                <Link to="/Connect" className=''>انضم لنا</Link>
            </PrimaryBtn>
        </div>

        </>
    )
}


export default GamingLibrary