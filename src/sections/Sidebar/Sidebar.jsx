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
        <div className={ activeSideBar ? 'sidebar activeSideBar' : 'sidebar' } >
            <div className='sidebar-content'>
                <HashLink to={"/Profile"} onClick={handelClick}>
                    <div className="profileAccount">
                        <div className="profileImg">
                            <img className='img-fluid' src={profileImg} alt="" />
                        </div>
                        <div className="profileTxt">
                            <span className='name'>عمر طارق</span>
                            <span className='caption'>الوصف هنا.</span>
                        </div>
                    </div>
                </HashLink>

                <ul className='sideBarItems'>
                    {/* for making active class not make error */}
                    <li className="notItem item activeSidebarItem d-none"></li> 
                    <HashLink to={"/"} onClick={handelClick}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-house" />
                                <span>الرئيسية</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/#News"} onClick={handelClick}>
                        <li className="item">
                            <span>
                                <i className="fa-regular fa-newspaper" />
                                <span>الاخبار الحصرية</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Training#TrainingTime"} onClick={handelClick}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-calendar-days" />
                                <span>مواعيد التدريب</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Contact#SubscribePlans"} onClick={handelClick}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-user-plus" />
                                <span>الاشتراكات</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"/Else/About"} onClick={handelClick}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-circle-exclamation" />
                                <span>من نحن</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"#!"}>
                        <li className="item">
                            <span>
                                <i className="fa-regular fa-circle-question" />
                                <span>المساعدة</span>
                            </span>
                        </li>
                    </HashLink>
                    <HashLink to={"#!"}>
                        <li className="item">
                            <span>
                                <i className="fa-solid fa-gear" />
                                <span>الاعدادات</span>
                            </span>
                        </li>
                    </HashLink>

                </ul>

                <div className="sideBarFooter">
                    <div className="item out" onClick={handelClick}>
                        <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" />
                            <span>خروج</span>
                        </span>
                    </div>
                    <div className="item style d-flex justify-content-between">
                        <span>
                            <i className="fa-solid fa-paintbrush"/>
                            <span>الوضع</span>
                        </span>
                        <Themes />
                    </div>
                </div>
                
            </div>
            <div className={ activeSpan ? 'sidebarBtn priBtn' : 'sidebarBtn'} onClick={handelClick}>
                <i className={ activeSpin ? 'fa-solid fa-list fa-rotate-180 fa-fade' : 'fa-solid fa-list fa-rotate-180'} />
            </div>
        </div>
        </>
    )
}

export default Sidebar