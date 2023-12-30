import React, { useState } from 'react';
import { Themes } from '../../components';
import './Sidebar.css'

const Sidebar = () => {
    const [ activeSideBar, setActiveSideBar ] = useState(false)
    const [ activeSpan, setActiveSpan] = useState(false)
    const [ activeSpin, setActiveSpin ] = useState(false)

    

    let handelClick = () => {
        setActiveSideBar(!activeSideBar)
        setActiveSpan(!activeSpan)
        setActiveSpin(!activeSideBar)
    };

    return (
        <>
        <div className={ activeSideBar ? 'sidebar activeSideBar' : 'sidebar' }>
            <div className='sidebar-content'>
                <Themes />
            </div>
            <div className={ activeSpan ? 'sidebarBtn priBtn' : 'sidebarBtn'} onClick={handelClick}>
                <i className={ activeSpin ? 'fa-solid fa-gear fa-spin' : 'fa-solid fa-gear'} />
            </div>
        </div>
        </>
    )
}

export default Sidebar