import { Link } from 'react-router-dom'

import './TrainTimeCard.css'

import { FaFlag } from 'react-icons/fa'

import  PrimaryButton  from '../Buttons/Buttons'






const  TrainTimeCard = (props) =>{
    return(
        <div className='page-games'>
        <div className='training-time-card'>
            <div className='card-wrapper-related-games'>

                <div className='img-train'>
                    <img className='img-fluid' src={props.image} alt='' />
                    <span className='txt'>
                        <h5 className='related-games-item-title'>
                            {props.title}
                        </h5>
                        <span className='sml-fnt dis-none'>{props.category}</span>
                    </span>
                </div>

                <ul className='all-content'>
                    <li className='dis-none'>
                        <ul className='icns-pos'>

                            <li>
                                <span style={{color:"var(--color-icons)",  marginLeft:"5px"}}>
                                <i className="fa-regular fa-calendar-days" />
                                </span> 
                                <div>{props.rate}</div>
                            </li>

                            <li>
                                <span style={{color:"var(--color-primary)",  marginLeft:"5px"}}>
                                <i className="fa-regular fa-hand-point-left" />
                                </span> 
                                <div>{props.download}</div>
                            </li>

                        </ul>
                    </li>
                </ul>

                <div className='btn-edit-5'>                            
                    <PrimaryButton>
                        <Link to={props.to_path}>
                            <FaFlag />
                        </Link>
                    </PrimaryButton>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TrainTimeCard