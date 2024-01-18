import './thirdNews.css'

import { Card } from '../../../components/index'
import   MostPopularData from '../../../Data/mostPopularData'



const thirdNews = () =>{
    const cards = MostPopularData.map(card => {
        return <Card 
        key         =   {  card.id        } 
        image       =   {  card.image     } 
        title       =   {  card.title     } 
        category    =   {  card.category  } 
        rate        =   {  card.rate      } 
        download    =   {  card.download  } 
        to_path     =   {  card.to_path   } 
        newsPath    =   {  card.newsPath  }
        />
    }) 
    return(
        <>
        <div className='homeThirdNews'>
            {cards[0]}
        </div>
        </>
    )
}
    
export default thirdNews