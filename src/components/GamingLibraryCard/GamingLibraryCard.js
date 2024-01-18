import { Link } from 'react-router-dom'

import { SecondaryBtn } from '../../components'

import './subs.css'
import './GamingLibraryCard.css'


const GamingLibraryCard = (props) => {
    return(
        <div 
            className='gaming-library-item'>
            <ul>
            <li className='btn-li'>                            
                    <SecondaryBtn>
                        <Link className='path-over pri-color' to={props.to_path}>
                            الفريق 
                        </Link>
                    </SecondaryBtn>
                </li>



                <li className='all-content-without-img'>
                    <ul className='toControl'>
                        <li className='button-in'>
                            <div className='btn-li media-small-btn'>
                                <SecondaryBtn>
                                    <Link className='path-over' to={props.to_path}>
                                        الفريق
                                    </Link>
                                </SecondaryBtn>
                            </div>
                        </li>
                        <li><div><h4>الحالية</h4><span>{props.trophy}</span></div></li>
                        <li><div><h4> المشارك بها</h4><span>{props.trophyPlayed}</span></div></li>
                        <li><div><h4>البطولات</h4><span>{props.trophyWin}</span></div></li>

                    </ul>                     
                </li>
                

                <li className='G-L-I-img'>
                    <div className='G-L-I-txt big-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                    <div><img src={props.image} alt=''></img></div>
                </li>



            </ul>
        </div>
    )
}







const GamingLibraryCardProf = (props) => {
    return(
        <div className='subs'>
            <ul>
                <li className='subscribeLi'>  
                    <div className='subscribesBtn d-flex gap-3'>
                        <SecondaryBtn>
                        <i className="fa-solid fa-trash" />
                        </SecondaryBtn>
                        <SecondaryBtn>
                            <i className="fa-solid fa-gears" />
                        </SecondaryBtn>
                        <SecondaryBtn>
                        <i className="fa-regular fa-pen-to-square" />
                        </SecondaryBtn>
                    </div>                          
                </li>



                <li className='all-content-without-img'>
                    <ul className='toControl'>
                        <li><div><h4>غير مشترك</h4><span>{props.download}</span></div></li>
                        <li><div><h4>مشترك</h4><span>{props.hours_played}</span></div></li>
                        <li><div><h4>اللاعبين</h4><span>{props.data_added}</span></div></li>
                    </ul>                     
                </li>
                

                <li className='G-L-I-img'>
                    <div className='G-L-I-txt big-media'><h4>{props.title}</h4><span>{props.category}</span></div>
                    <div><img src={props.image} alt=''></img></div>
                </li>



            </ul>
        </div>
    )
}


export default GamingLibraryCard

export { GamingLibraryCardProf }