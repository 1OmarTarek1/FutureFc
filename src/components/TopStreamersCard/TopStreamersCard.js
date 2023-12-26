import PrimaryButtonStream from '../Buttons/Buttons'
import { Link } from 'react-router-dom'

import './TopStreamersCard.css'

import { FaCheck } from 'react-icons/fa'


const  TopStreamersCard = (props) =>{
    return(
        <>
            <li className='the-li-here'>
                <div className='top-streams'>
                    <div className='most-popular-item live-card'>

                                <div className='most-popular-item-content'>

                                    <h4 className='most-popular-item-title'>
                                        <img src={props.img} alt='' />
                                        <div className='center-cont'>
                                            <span className='icn-and-title'>
                                                <div className='check-icn'>
                                                    <FaCheck />
                                                </div>
                                                <span className='title'>{props.title}</span>
                                            </span>
                                        </div>
                                    </h4>

                                    <span className='button-stream'>
                                        <PrimaryButtonStream>
                                            <Link to={props.teamPath}> {props.team} </Link>
                                        </PrimaryButtonStream>
                                    </span>
                                </div>

                    </div>
                </div>
            </li>
        </>

    )
}

export default TopStreamersCard