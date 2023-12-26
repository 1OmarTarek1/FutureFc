// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

import './NavItem.css'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'




const NavItem = (props) => {
    return(
        <li className='nav-item'>
            {props.children}
        </li>
    )
}


// data-mdb-toggle ="dropdown" 


const NavItemDropDown = (props) => {

    return(
        <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle " to="/Else"  role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                {props.children}
            </NavLink>
            <ul className="dropdown-menu big-ul">

                
                <li className="nav-item dropend">
                    <NavLink className="teams nav-link dropdown-toggle" to="/Else/Teams" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <span>     
                            الفرق 
                        </span>
                        <i className="fl fa-solid fa-flag" />
                    </NavLink>
                    <ul className="dropdown-menu mini-ul">
                        <li><NavLink className="dropdown-item all-links-website" to="/Else/Teams/T_2009">2009</NavLink></li>
                        <li><NavLink className="dropdown-item all-links-website" to="/Else/Teams/T_2010">2010</NavLink></li>
                        <li><NavLink className="dropdown-item all-links-website" to="/Else/Teams/T_2011">2011</NavLink></li>
                    </ul>
                </li>

                <NavItem>
                    <NavLink to="Else/About" className="dropdown-item all-links-website">
                        <span>
                            من نحن  
                        </span>
                        <i className="fa-solid fa-circle-info" />
                    </NavLink>
                </NavItem>

            </ul>
        </li>
    )
}


export default NavItem
export {NavItemDropDown}