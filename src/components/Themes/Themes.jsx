import { useEffect, useState } from 'react';
import './Themes.css'

const Themes = () => {
    const [ activeTheme, setActiveTheme ] = useState()
    const [ activeCircle, setActiveCircle ] = useState()
    const selectedTheme = localStorage.getItem("selectedTheme");

    const setDarkMode = () => {
        document.documentElement.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark");
    };
    const setLightMode = () => {
        document.documentElement.querySelector("body").setAttribute('data-theme', 'light') ;
        localStorage.setItem("selectedTheme", "light");
    };
    useEffect( () => {    
        if( selectedTheme === "light"){
            setLightMode()
            setActiveTheme(true)
            setActiveCircle(true)            
        }
        else{
            setActiveTheme(false)
            setActiveCircle(false)            
        }
    }, [ activeCircle, activeTheme, selectedTheme ]);
    const toggleTheme = ( e ) => {
        if ( e.target.checked ) {
            setLightMode()
            setActiveTheme(true)
            setActiveCircle(true)
        }
        else {
            setDarkMode()
            setActiveTheme(false)
            setActiveCircle(false)            
        };
    };

return (
<>
    <div className={activeTheme ? "Theme light" : "Theme dark"} >
        <input 
        type='checkbox'
        id='idTheme' 
        className={"themeBtn"} 
        onChange={toggleTheme}
        defaultChecked = { selectedTheme === "light" }
        />
        <label htmlFor='idTheme' className="circle"  >
            <i className={ activeCircle ? "fa-solid fa-sun" : "fa-solid fa-moon"} />
        </label>
    </div>
</>
)}

export default Themes