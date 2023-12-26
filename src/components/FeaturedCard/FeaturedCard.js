import './FeaturedCard.css'

import { FaStar, FaDownload } from 'react-icons/fa'


const  FeaturedCard = (props) =>{
    return(
        <div className='related-games-item feat-games-item '>

                <div className='card-wrapper-related-games'>

                
                    <div className='related-games-item-content'>
                        <span className='img-txt'>
                            <span className='hoverDiv-and-img'>
                                <img className='feat-games-item-image' src={props.image} alt='' />
                            </span>
                            <div className='txt-icns'>
                                <span className='txt'>
                                    <h5 className='related-games-item-title'>{props.title}</h5>
                                    <span className='sml-fnt'>{props.category}</span>
                                </span>
                                
                                <ul className='icns-pos'>
                                    <li><span style={{"color":"var(--color-icons)"}}><FaStar /></span> <span>{props.rate}</span></li>
                                    <li><span style={{"color":"var(--color-primary)"}}><FaDownload /></span> <span>{props.download}</span></li>
                                </ul>
                            </div>

                        </span>
                    </div>
                    
                </div>

        </div>
    )
}

export default FeaturedCard