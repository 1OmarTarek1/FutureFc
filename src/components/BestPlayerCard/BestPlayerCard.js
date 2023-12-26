import './BestPlayerCard.css'

import React from 'react'

const BestPlayerCard = (props) => {
return (
    <>
    <div className='playerCard'>
        <div className='img-and-name'>
            <div className='playerImg-wrapper'>
                <img className='pImg' src={props.image} alt='' />
                <div className='plyer-effect'>
                    <span>{props.team}</span>
                </div>
            </div>
            <div className='playerName'>{props.name}</div>
        </div>
        <p className='player-text'>{props.text}{props.club}</p>
    </div>
    </>
)
}

export default BestPlayerCard