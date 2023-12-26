import './SmlCard.css'

import React from 'react'

const SmlCard = (props) => {
  return (
    <>
    <div
      className='aboutTeam d-flex  justify-content-evenly alien-items-center'>

          <div className='itm'>
              <div className='icnItm trophy'>
                  <i className="fa-solid fa-trophy" />
              </div>
              <div className='icnTxt'>
                  { props.data_added }
              </div>
          </div>

          <div className='itm'>
              <div className='icnItm medal'>
                  <i className="fa-solid fa-medal" />
              </div>
              <div className='icnTxt'>
                  { props.hours_played }
              </div>
          </div>

          <div className='itm'>
              <div className='icnItm flag'>
              <i className="fa-solid fa-flag-checkered"></i>
              </div>
              <div className='icnTxt'>
                  { props.download } 
              </div>
          </div>

      </div>
    </>
  )
}

export default SmlCard