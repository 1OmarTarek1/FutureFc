import { Link } from 'react-router-dom'

import { SectionHeader, SectionWrapper, PrimaryBtn } from '../../components/index'
import { FirstNews, SecondNews, ThirdNews, FourthNews } from '../../sections/MostPopular/index'


import './MostPopular.css'
import { FaNewspaper } from 'react-icons/fa'




const MostPopular = () =>{

    return(
        <>
            <div className='mostNews' id="News" data-aos="fade">
                <SectionWrapper>
                    <span className='media-title'>
                        <SectionHeader> <FaNewspaper />بعض الاخبار <em>الحصرية</em></SectionHeader>
                    </span> 

                    <div className="this-div">
                        <div className="firstNews">
                            <div    className="up" >
                                <FirstNews />
                            </div>
                            <div className="down">
                                <div className="left" >
                                    <ThirdNews /> 
                                </div>
                                <div className="right" >
                                    <FourthNews />                                    
                                </div>
                            </div>
                        </div>
                        <div className="secondNews">
                            <SecondNews />
                        </div>
                    </div>

                </SectionWrapper>

                <PrimaryBtn>
                    <Link 
                        to="/News" 
                        className='sec-color'>
                            المزيد  
                    </Link>
                </PrimaryBtn>
            </div>           
        </>
    )
}

export default MostPopular
