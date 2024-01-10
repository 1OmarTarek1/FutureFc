import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';


import profileImg from '../../assets/images/profile.jpg'

import './ProfileLink.css'



const ProfileLink = () => {

    useEffect( () => {
        let profileLink = document.querySelector(".profileLink") ;
        let login       = document.querySelector(".loginLink")   ;
        let User        = 0                                      ;
        let ON          = document.querySelector(".ON")          ;
        let OFF         = document.querySelector(".OFF")         ;

        ON.addEventListener('click', () => {
            User = 1;
            if( User === 0 ){
                profileLink.style.display = "none";
                login.style.display = "flex";
            }
            else if( User === 1 ){
                login.style.display = "none"
                profileLink.style.display = "flex"
            }
            else(console.log("Your Code Not Working :("));
        })
        OFF.addEventListener('click', () => {
            User = 0;
            if( User === 0 ){
                profileLink.style.display = "none";
                login.style.display = "flex";
            }
            else if( User === 1 ){
                login.style.display = "none"
                profileLink.style.display = "flex"
            }
            else(console.log("Your Code Not Working :("));
        })
    })

    return (
    <>
        <div className='fatherProfile d-flex gap-2'>
            <span className="d-flex gap-2" style={{ marginRight:"0px", position: "absolute", top: "165px",right:"-21px", fontSize:"10px", flexDirection:"column",opacity:".8"}}>
                <button className='ON' style={{padding:"0", width:"30px", height:"30px", border:"none", backgroundColor:"#333", color:"#888"}} >On</button>
                <button className='OFF'style={{padding:"0", width:"30px", height:"30px", border:"none", backgroundColor:"#333", color:"#888"}} >Off</button>
            </span>

            <NavLink to="Profile" className="profileLink">
                <div className='profile'>
                    <div className='photoWrapper'>
                        <img id='imgID' className='imgClass img-fluid' src={profileImg} alt='' />
                    </div>
                </div>
            </NavLink>



            <div  className="loginLink" style={{cursor:"pointer"}}>
                <div className='profile'>
                    <i className="fa-solid fa-user"
                    style={{ display:"grid", placeContent:"center",
                    width:"33px", height:"33px", 
                    borderRadius:"50%", backgroundColor:"var(--body-bg-color)"}} />
                </div>
            </div>
        </div>
    </>
    )
}

export default ProfileLink