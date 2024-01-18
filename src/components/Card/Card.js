import './Card.css'
import { Link } from 'react-router-dom'
import { SecondaryBtn } from '../../components/index'
import { HashLink } from 'react-router-hash-link'


const  Card = (props) =>{
    return(
            <div className='just-for-pop  most-card' id={props.idLocation}>

                    <div className='card-wrapper'>
                        <div className='img-wrapper'>
                            <img className='most-popular-item-image' src={props.image} alt='' />
                            <div className='D-after'><Link to={props.to_path} ><i className='fa-solid fa-flag' /></Link></div>
                        </div> 
                        

                        <div className='cardContent'>
                            <h6>{props.title}</h6>
                            <p>
                                {props.category}
                            </p>
                        </div>
                        <SecondaryBtn>
                            <HashLink to={props.newsPath}>المزيد</HashLink>
                        </SecondaryBtn>                                  
                    </div>
            </div>
    )
}

export default Card