import './SecHeaderLink.css'


const SecHeaderLink = ( props ) => {
    return (
        <>
            <li>
                <a href={props.scrollTo} className="secHeaderLink">
                    {props.txt} 
                </a>
            </li>
        </>
    )
}

export default SecHeaderLink