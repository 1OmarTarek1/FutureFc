import { NavLink } from 'react-router-dom';
import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem';
import { useEffect, useState } from 'react';
import { IconButton, ProfileLink, SearchBoxPC, SearchBoxMob } from '../../components';
import   logoHead   from '../../assets/images/logoHead.png';
import './Header.css';





const Header = () => {
    let [ activeButton, setActiveButton ] = useState( false );
    useEffect(() => {
        let navBar = document.querySelector(".navbar-collapse");
        let headerLinks = document.querySelectorAll(".all-links-website");
 
        const handleClick = () => {
            navBar.classList.remove("show");
            setActiveButton((activeButton) => !activeButton);
        };
 
        headerLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });
 
        // Cleanup function
        return () => {
            headerLinks.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
        };
    }, [activeButton]);

    return(
    <>
        <div 
            className="cyborg-navbar navbar navbar-expand-md navbar-dark">
            <div className="container">
                <IconButton  setActiveButton={setActiveButton} activeButton={activeButton} />

                <NavLink to="/" className="navbar-brand logo ">
                    <img src={logoHead} alt='' />
                </NavLink>

                <div
                className='collapse navbar-collapse justify-content-center '
                    id="mainmenu">
                    <ul className="ulTap navbar-nav ms-center nav-transition">
                        
                        <NavItem className="searchLi d-none">
                            <SearchBoxMob  setActiveButton={setActiveButton} activeButton={activeButton} />
                        </NavItem>
                        
                        <NavItem>
                            <NavLink to="/Contact" className="nav-link all-links-website" >
                                <i className="fa-solid fa-message"></i>
                                <span>تواصل</span>
                            </NavLink>
                        </NavItem>

                        <NavItemDropDown>
                                <i className="fa-solid fa-square-caret-down" />
                                <span>اخري</span>
                        </NavItemDropDown>
                        
                        <NavItem>
                            <NavLink className="nav-link all-links-website" to="/Training">
                                <i className="fa-solid fa-person-running" style={{transform:"scale(1.3)"}}/>
                                <span>التدريب</span>
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink className="nav-link all-links-website" to="/News">
                                <i className="fa-solid fa-newspaper" />
                                <span>الاخبار </span>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/" className="nav-link all-links-website">
                                <i className="fa-solid fa-house" />
                                <span>الرئيسية </span>
                            </NavLink>
                        </NavItem>
                    </ul>

                </div>

                <div className="allBoxSearch toRemoveForm-pc" >
                        <SearchBoxPC  />
                </div>
                <ProfileLink />
            </div>
        </div>
    </>
    )
}

export default Header