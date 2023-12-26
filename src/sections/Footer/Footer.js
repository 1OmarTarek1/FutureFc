import { NavLink, Link } from 'react-router-dom';

import { PrimaryBtn }    from '../../components/index';

import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import   logoFoot from '../../assets/images/logoFoot.png';


const Footer = () => {
    return(
        <>
        <div className="footer pt-5 mt-5 text-white-50 text-center text-md-start">
            <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-lg-4">
                            <div className="info">
                            <NavLink to="/" className="navbar-brand logo mb-4"><img src={logoFoot} alt=''></img></NavLink>
                                <p className="mb-5">
                                    Pellentesque in ipsum id orci porta dapibus. 
                                    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                </p>
                                <div className="copyright mb-5">
                                    Created By <span>Omar Tarek</span>
                                    <div>
                                        &copy; 2023 - <span className='fw-bold'>FUTURE FC</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div className="links mb-5">
                                <div className="h5 text-light">Links</div>
                                <ul className="list-unstyled lh-lg">
                                    <li>Home</li>
                                    <li>Our Services</li>
                                    <li>Portfolio</li>
                                    <li>Testimonials</li>
                                    <li>Support</li>
                                    <li>Terms and Condition</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div className="links mb-5">
                                <div className="h5 text-light">About Us</div>
                                <ul className="list-unstyled lh-lg">
                                    <li>Sign In</li>
                                    <li>Register</li>
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="contact mb-5">
                                <h5 className="text-light">Contact Us</h5>
                                <p className="lh-lg mt-3 mb-5">
                                    Get in touch with us via mail phone.
                                    We are waiting for your call or message
                                </p>
                                
                                <PrimaryBtn>OmarTarek@gmail.com</PrimaryBtn>
                                
                                <ul className="media-social d-flex mt-5 list-unstyled gap-4">

                                    <li>
                                        <Link className="d-block text-light" to="//www.facebook.com" target='blank' >
                                            <i className="fa-brands fa-lg facebook rounded-circle p-2"><FaFacebook/></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="d-block text-light" to="//www.twitter.com" target='blank'>
                                            <i className="fa-brands  fa-lg twitter rounded-circle p-2"><FaTwitter/></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="d-block text-light" to="//www.linkedin.com" target='blank'>
                                            <i className="fa-brands fa-lg linkedin rounded-circle p-2"><FaLinkedin/></i>
                                        </Link>
                                    </li>

                                    
                                    <li>
                                        <Link className="d-block text-light" to="//www.youtube.com" target='blank'>
                                            <i className="fa-brands fa-lg youtube rounded-circle p-2"><FaYoutube/></i>
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
        </div>
        </>

    )
}

export default Footer