import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Themes } from '../../components';
import profileImg from '../../assets/images/profile.jpg'
import './Sidebar.css'


const Sidebar = () => {
    const [ activeSideBar, setActiveSideBar ] = useState(false)
    const [ activeSpan, setActiveSpan] = useState(false)
    const [ activeSpin, setActiveSpin ] = useState(false)

    useEffect(() => {
        let items = document.querySelectorAll('.item')  ; 
        items.forEach( item => {
            item.addEventListener('click', () => {
                let active = document.querySelector('.activeSidebarItem');
                active.classList.remove('activeSidebarItem');
                item.classList.add('activeSidebarItem');
            });
        });

        // Clean Up 
        return () => {
            items.forEach( item => {
                item.removeEventListener('click', () => {
                    let active = document.querySelector('.activeSidebarItem');
                    active.classList.remove('activeSidebarItem');
                    item.classList.add('activeSidebarItem');
                });
            });
        }
    });

    let handelClick = () => {
        let active = document.querySelector('.activeSidebarItem');
        let notItem = document.querySelector('.notItem');
        if(activeSideBar){
            active.classList.remove('activeSidebarItem');
            notItem.classList.add('activeSidebarItem');
        };
        setActiveSideBar(!activeSideBar)
        setActiveSpan(!activeSpan)
        setActiveSpin(!activeSideBar)
    };

    return (
        <>
        <div className={ activeSideBar ? 'sidebar activeSideBar' : 'sidebar' }>
            <div className='sidebar-content'>
                <HashLink to={"/Profile"} onClick={handelClick}>
                    <div className="profileAccount">
                        <div className="profileImg">
                            <img className='img-fluid' src={profileImg} alt="" />
                        </div>
                        <div className="profileTxt">
                            <span className='name'>Omar Tarek</span>
                            <span className='caption'>Caption Here.</span>
                        </div>
                    </div>
                </HashLink>

                <ul className='sideBarItems'>
                    {/* for making active class not make error */}
                    <li className="notItem item activeSidebarItem d-none"></li> 
                    <HashLink to={"/"}>
                        <li className="item ">
                            <span>
                                <i className="fa-solid fa-house" />
                                <span>Home</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/#News"}>
                        <li className="item">
                            <span>
                                <i className="fa-regular fa-newspaper" />
                                <span>Exclusive News</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Training#TrainingTime"}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-calendar-days" />
                                <span>Training Time</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Contact#SubscribePlans"}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-user-plus" />
                                <span>Subscribe</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Else/About"}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-circle-exclamation" />
                                <span>About Us</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"#!"}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-gear" />
                                <span>Settings</span>
                            </span>
                        </li>
                    </HashLink>
                </ul>

                <div className="sideBarFooter">
                    <div className="item out" onClick={handelClick}>
                        <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" />
                            <span>Logout</span>
                        </span>
                    </div>
                    <div className="item style d-flex justify-content-between">
                        <span>
                            <i className="fa-solid fa-paintbrush fa-rotate-270"/>
                            <span>Theme</span>
                        </span>
                        <Themes />
                    </div>
                </div>
                
            </div>
            <div className={ activeSpan ? 'sidebarBtn priBtn' : 'sidebarBtn'} onClick={handelClick}>
                <i className={ activeSpin ? 'fa-solid fa-list fa-fade' : 'fa-solid fa-list'} />
            </div>
        </div>
        </>
    )
}

export default Sidebar