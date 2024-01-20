import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

import { SecondaryBtn } from '../../components/index'
import   Profile        from '../../assets/images/profile.jpg'
import   Cover        from '../../assets/images/realTeam.jpg'

import './ProfileStream.css'
import './UploadCover.css'


const ProfileStream = () => {

    return(
        <div className='profile-top-side'> 
            <div className='center-content'>   

                <div className='cover-pro'>
                    <div className='cover'>
                        <img  src={Cover} alt=''   /> 
                    </div>
                    <div className='all-profile'>
                            <div className='profile'>
                                <img  src={Profile} alt=''   /> 
                            </div>

                            <div className='info-pro'>
                                <div className='name-cap'>
                                    <h3>
                                        عمر طارق
                                        <i className="fa-solid fa-check" 
                                            style={{
                                            backgroundColor:"#1f7af2",
                                            fontSize:"8px",
                                            marginRight:"10px",
                                            padding:"4px 4.5px",
                                            borderRadius:"50%"}}/>
                                    </h3>
                                    <p>G . O . A . T</p>
                                </div>

                                <div className='social-media-box'>

                                    <MDBBtn 
                                        size='sm'
                                        className='m-1' 
                                        style={{ 
                                            backgroundColor: '#0082ca', }} 
                                            href='https://www.facebook.com'>
                                        <MDBIcon fab icon='facebook' />
                                    </MDBBtn>

                                    <MDBBtn 
                                    
                                    size='sm'
                                    className='m-1' 
                                    style={{ 
                                        backgroundColor: '#ac2bac' }} 
                                        href='https://www.instagram.com'>
                                        <MDBIcon fab icon='instagram' />
                                    </MDBBtn>

                                    <MDBBtn 
                                    size='sm'
                                    className='m-1' 
                                    style={{ 
                                        backgroundColor: '#25d366'}} 
                                        href='https://www.whatsapp.com'>
                                        <MDBIcon fab icon='whatsapp' />
                                    </MDBBtn>

                                    <MDBBtn 
                                    size='sm'
                                    className='m-1' 
                                    style={{ 
                                        backgroundColor: '#dd4b39'}} 
                                        href='https://www.gmail.com'>
                                        <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                </div>

                            </div>
                    </div>
                </div>

            </div>


            <div className='boxes'>

                <div className='right-content'>
                    <div className='container-right-content'>
                        <div className='itm'>
                        <div className='txtIcns'>
                            <i className="fa-solid fa-shield-halved" />
                            دفندر
                        </div>
                        <div className='btn-c'>
                            <SecondaryBtn>
                                <Link to="/Browse">
                                    <i className="fa-solid fa-copyright" />
                                </Link>
                            </SecondaryBtn>
                        </div>
                            <span>6</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-award" />
                                افضل لاعب
                            </div>
                            <span><i className="fa-solid fa-star" /></span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-regular fa-futbol" />
                                الاهداف
                            </div>
                            <span>99</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-flag-checkered" />
                                الاسستات
                            </div>
                            <span>99</span>
                        </div>
                    </div>
                </div>

                <div className='right-content'>
                    <div className='container-right-content'>
                        <div className='itm'>
                        <div className='txtIcns'>
                            <i className="fa-solid fa-percent" />
                            معدل التهديف
                        </div>
                            <span>99.9%</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-percent" />
                                نسبة التمريرات الصحيحة
                            </div>
                            <span>99%</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-percent" />
                                نسبة التسديدات علي المرمي
                            </div>
                            <span>99%</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-person-running" />
                                القوة البدنية
                            </div>
                            <span>99%</span>
                        </div>

                    </div>
                </div>

                <div className='right-content'>
                    <div className='container-right-content'>
                        <div className='itm'>
                                <div className='txtIcns'>
                                    <i className="fa-solid fa-dumbbell" />
                                    القوة الجسمانية
                                </div>
                                <span>99%</span>
                        </div>
                        <div className='itm'>
                        <div className='txtIcns'>
                            <i className="fa-solid fa-trophy" />
                            البطولات الجماعية
                        </div>
                            <span>3</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-medal" />
                                البطولات الفردية
                            </div>
                            <span>16</span>
                        </div>
                        <div className='itm'>
                            <div className='txtIcns'>
                                <i className="fa-solid fa-flag-checkered" />
                                البطولة الحالية
                            </div>
                            <span>FPL</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileStream