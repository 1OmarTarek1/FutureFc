import './MostPopularLiveCard.css'



import { FaEye, FaCheck, FaGamepad } from 'react-icons/fa'


const  Card = (props) =>{
    return(
            <div className='live-card new-enter'>

                    <div className='card-wrapper'>

                        <div className='bigImage-and-hoverEff'>
                            
                        <div className='catch-img'>
                            <img className='most-stream-item-image' src={props.image} alt='' />
                        </div>
                            

                            <div className='hover-eff'>           

                                <div className='view-and-game'>
                                    <span className='view'><FaEye /> {props.view}</span>
                                    <span className='game-name'>
                                        <FaGamepad /> {props.gameName}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='most-popular-item-content'>

                            <img src={props.img} alt='' />
                            <h4 className='most-popular-item-title'>
                                <span className='icn-and-title'>
                                    <div className='check-icn'><span><FaCheck /></span></div>
                                    <span className='title'>{props.title}</span>
                                </span>
                                <span className='sml-txt'>{props.category}</span>
                            </h4>

                        </div>

                        
                    </div>

            </div>
    )
}

export default Card