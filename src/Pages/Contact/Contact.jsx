
import { AboutCoaches, Plans, ConnectUs, TrainTime } from '../../sections'

import './Contact.css'




const Contact = () => {

  return (
    <>
    <div className='connectPage'>
      <Plans />
      <ConnectUs />
      <AboutCoaches />
      <div className='mb-9'></div>
      <TrainTime/>
    </div>
    </>
  )
}

export default Contact