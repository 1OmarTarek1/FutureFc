import { SectionHeader, SectionWrapper, BestPlayerCard } from '../../components'
import  BestPlayersData from '../../Data/BestPlayersData' 
import './Players.css'


import React from 'react'

const Players = () => {

    const cards = BestPlayersData.map(card => {
        return <BestPlayerCard 
                key   = { card.id    } 
                image = { card.image } 
                name  = { card.name  } 
                team  = { card.team  } 
                club  = { card.club  } 
                text  = { card.text  } 
        />
    }) 

return (
    <>
    <div className='players' id='PlayersGo' style={{marginTop:"var(--margin-primary)"}}>
    <SectionHeader>انتقالات اللاعبين</SectionHeader>
    <SectionWrapper>
        {cards}
    </SectionWrapper>
    </div>
    </>
  )
}

export default Players