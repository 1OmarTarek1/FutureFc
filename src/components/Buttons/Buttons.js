
import      { FaArrowUp } from 'react-icons/fa';
import        React, { useState }  from 'react'; 


import './Buttons.css';






const PrimaryBtn = (props) => { // PrimaryBtn
    return(
        <div className='button primaryBtn'>
           <span>{props.children}</span>
        </div>
    )
}
const SecondaryBtn = (props) => { // SecondaryBtn
    return(
        <div className='button secondaryBtn'>
            <span >{props.children}</span>
        </div>
    )
}
const IconButton = ({setActiveButton, activeButton}) => { // ICON NAVBAR LINKS

    //Add and Remove Active Class onClick
    // let [ activeButton, setActiveButton ] = useState( false );
    function handleClick(){ setActiveButton ( activeButton => !activeButton ); };
    let toggleClassCheck = activeButton ? 'activeBtn': '';

    return(
        <button 
        className       ={`maker ${toggleClassCheck} navbar-toggler remove-focus `}
        onClick={handleClick}
        type            ="button" 
        data-mdb-toggle  ="collapse" 
        data-mdb-target  ="#mainmenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}




const UpButton = () =>{ // Up Button
//START scroll to top page button
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if      ( scrolled > 700  ) { setVisible( true  )} 
        else if ( scrolled <= 700 ) { setVisible( false )}
        };
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };
    window.addEventListener('scroll', toggleVisible);
//END scroll to top page button

//RETURN
    return (
        <button 
        className  =  'arrow-btn' 
        onClick    =  {scrollToTop} 
        style      =  {{bottom: visible ? '2%' : '-50px'}}>
            <FaArrowUp />
        </button>
    );
}








export default  PrimaryBtn
export        { SecondaryBtn }
export        { IconButton }
export        { UpButton }