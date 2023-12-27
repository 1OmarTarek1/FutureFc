import React, { useState } from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import './Sidebar.css'

const Sidebar = () => {
    const [ activeSideBar, setActiveSideBar ] = useState(false)
    const [ activeSpan, setActiveSpan] = useState(false)
    const [ activeSpin, setActiveSpin ] = useState(false)

    let handelClick = () => {
        setActiveSideBar(!activeSideBar)
        setActiveSpan(!activeSpan)
        setActiveSpin(!activeSideBar)
    }

    return (
        <>
        <div className={ activeSideBar ? 'sidebar activeSideBar' : 'sidebar' }>
            <div className='sidebar-content'>
                <MDBAccordion className='linksFooter-sm' flush initialActive={""} >
                    <MDBAccordionItem collapseId={1} headerTitle='Themes'> 
                        <p>
                            <a href='/' className='text-reset'>
                                Home
                            </a>
                        </p>
                        <p>
                            <a href='/News' className='text-reset'>
                                News
                            </a>
                        </p>
                        <p>
                            <a href='/Training' className='text-reset'>
                                Training
                            </a>
                        </p>
                        <p>
                            <a href='/Else/About' className='text-reset'>
                                About Us
                            </a>
                        </p>
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>
            <div className={ activeSpan ? 'sidebarBtn priBtn' : 'sidebarBtn'} onClick={handelClick}>
                <i className={ activeSpin ? 'fa-solid fa-gear fa-spin' : 'fa-solid fa-gear'} />
            </div>
        </div>
        </>
    )
}

export default Sidebar