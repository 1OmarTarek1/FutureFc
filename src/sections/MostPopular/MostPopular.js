import { Link } from 'react-router-dom'

import { SectionHeader, SectionWrapper, PrimaryBtn } from '../../components/index'
import { FirstNews, SecondNews, ThirdNews, FourthNews } from '../../sections/MostPopular/index'


import './MostPopular.css'
import { FaNewspaper } from 'react-icons/fa'




const MostPopular = () =>{

    return(
        <>
            <div className='mostNews' id="News" data-aos="fade-up">
                <SectionWrapper>
                    <span className='media-title'>
                        <SectionHeader> <FaNewspaper />بعض الاخبار <em>الحصرية</em></SectionHeader>
                    </span> 

                    <div className="this-div">
                        <div className="firstNews">
                            <div    className="up" 
                                    data-aos="fade-right"
                                    data-aos-offset="100"
                                    data-aos-easing="ease-in-sine">
                                <FirstNews />
                            </div>
                            <div className="down">
                                <div className="left" >
                                    <FourthNews />
                                </div>
                                <div className="right" 
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-duration="500">
                                    <ThirdNews />                                       
                                </div>
                            </div>
                        </div>
                        <div className="secondNews" data-aos="fade-down">
                            <SecondNews />
                        </div>
                    </div>

                </SectionWrapper>

                <PrimaryBtn>
                    <Link 
                        to="/News" 
                        className='sec-color' 
                        data-aos="zoom-in"
                        data-aos-duration="500">
                        المزيد من الاخبار
                    </Link>
                </PrimaryBtn>
            </div>           
        </>
    )
}

export default MostPopular
