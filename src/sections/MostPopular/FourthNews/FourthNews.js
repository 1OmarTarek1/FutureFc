// import { useEffect } from 'react'

import './fourthNews.css'
// import  ahmed from './Videos/Facebook.mp4'

import img from '../../../assets/images/videoImg.jpg'

const FourthNews = () =>{

    // useEffect( () => {
    //     let image = document.querySelector(".vImg");
    //     let video = document.querySelector("#mainVid");
    //     let box   = document.querySelector(".icn-box");
    //     let icon  = document.querySelector(".open");
        
    //     icon.addEventListener('click', () => {
    //         video.style.display="block"
    //         image.style.display="none"
    //         box.style.display="none"
    //     })
    // })

    return(


        <>
        <div className='vidCard' 
        style={{direction:"rtl", backgroundColor:"var(--color-dark)",padding:"10px 10px 10px 10px",marginBottom:"30px"}}>
            <h5>كلمة رئيس النادي :</h5>
            <span style={{fontSize:"12.5px", color:"var(--color-light-dark)"}}>رسالة رئيس النادي الموجه لادارة البطولة</span>
                
                <div className='vid' style={{position:"relative",marginTop:"10px"}}>
                    <div className='icn-box'>
                        <i className="open fa-solid fa-circle-play"></i>
                    </div>
                    <img className='vImg img-fluid' src={img} alt=''></img>
                    {/* <video 
                    id='mainVid' 
                    src={ahmed} 
                    type="video/mp4" 
                    width="100%" 
                    height="100%" 
                    controls 
                    /> */}
                </div>  
        </div>
        </>            
    )
}

export default FourthNews