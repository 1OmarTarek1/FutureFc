import React from 'react'
import { Link } from 'react-router-dom'

import { SecondaryBtn } from '../../components'

import './PlanCard.css'


const PlanCard = ( props ) => {

    return (
    <>
        <div className={props.planClass} id={props.id} > {props.startIcn}

            <div className='title'> {props.title} </div>

            <div className='cost'> {props.cost} </div>

            <ul>
                <li>
                    <i className="fa-solid fa-check" />
                    <span>
                        <i className="fa-solid fa-person-running fa-lg" />
                        {props.trainsNumCost} 
                    </span>
                </li>
                <li> { props.outfit } </li>
                <li> { props.trophy } </li>
            </ul>

            <SecondaryBtn>
                <Link to='/'>
                    اشترك الان
                </Link>
            </SecondaryBtn>

        </div>
    </>
    )

}

export default PlanCard