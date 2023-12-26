import './MostPopularProfileCard.css'


import { FaEye, FaPlay } from 'react-icons/fa'


const  MostPopularProfileCard = (props) =>{
    return(
        <div className='most-profile-item'>
                <div className='card-wrapper'>

                    <div className='img-and-icon'>
                        <img className='most-profile-item-image' src={props.image} alt='' />
                        <a 
                        href        ='https://www.youtube.com' 
                        target      ='blank' 
                        className   ='icn-a'>
                            <span className='icon'><FaPlay/></span>
                        </a>
                    </div>
                
                    <div className='most-profile-item-content'>

                        <h4 className='most-profile-item-title'>
                            {props.title}
                        </h4>

                        <ul>
                            <li>
                                <span style={{"color":"var(--color-primary)"}}>
                                    <FaEye  style={{"fontSize":"19px"}}/>
                                </span> 
                                <span> {props.view}</span>
                            </li>
                        </ul>

                    </div>
                </div>
        </div>
    )
}

export default MostPopularProfileCard