
import { BestPlayerCard } from '../../../components/index'
import BestPlayerData from '../../../Data/BestPlayersData'
import './fourthNews.css'

const FourthNews = () =>{
    const cards = BestPlayerData.map(card => {
        return <BestPlayerCard 
        key   = { card.id    } 
        image = { card.image } 
        name  = { card.name  } 
        team  = { card.team  } 
        club  = { card.club  } 
        text  = { card.text  } 
        />
    }) 
    return(
        <>
        <div className='homeFourthNews'>
            {cards[0]}
        </div>
        </>
    )
}

export default FourthNews