import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { HashLink } from 'react-router-hash-link';
import footerIcon from '../../assets/images/logoFoot.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <MDBFooter bgColor={"var(--color-darkest)"} className='footer text-center text-lg-start text-muted mt-5'>
        <section className='footSocial d-flex justify-content-center justify-content-lg-between p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
            </div>

            <div>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="facebook-f" />
            </HashLink>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="twitter" />
            </HashLink>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="google" />
            </HashLink>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="instagram" />
            </HashLink>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="linkedin" />
            </HashLink>
            <HashLink to='#!' className='text-reset' style={{marginInline:"10px"}}>
                <MDBIcon fab icon="github" />
            </HashLink>
            </div>
        </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="4" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                    <Link to={"/"} style={{color:"var(--color-light-dark)"}}>
                        <span>
                                <img 
                                className='footerIcon img-fluid' 
                                src={footerIcon} 
                                alt='' 
                                width="30px"
                                style={{marginRight:"10px"}}
                                />
                        </span>
                        Future Academy
                    </Link>
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' >
                    <div className='linksFooter-lm'>
                        <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
                        <p>
                            <HashLink to='/' className='text-reset'>
                                Home
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/News' className='text-reset'>
                                News
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/Training' className='text-reset'>
                                Training
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/Else/About' className='text-reset'>
                                About Us
                            </HashLink>
                        </p>
                    </div>
                    <MDBAccordion className='linksFooter-sm' borderless initialActive={""} >
                        <MDBAccordionItem collapseId={1} headerTitle='Pages' > 
                            <p>
                                <HashLink to='/' className='text-reset'>
                                    Home
                                </HashLink>
                            </p>
                            <p>
                                <HashLink to='/News' className='text-reset'>
                                    News
                                </HashLink>
                            </p>
                            <p>
                                <HashLink to='/Training' className='text-reset'>
                                    Training
                                </HashLink>
                            </p>
                            <p>
                                <HashLink to='/Else/About' className='text-reset'>
                                    About Us
                                </HashLink>
                            </p>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <div className='linksFooter-lm'>
                        <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                        <p>
                            <HashLink to='/Training#TrainingTime' className='text-reset'>
                                Training Time
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/#News' className='text-reset'>
                                Important News
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/Contact#SubscribePlans' className='text-reset'>
                                Subscribe Plans
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/#SomeTeams' className='text-reset'>
                                Teams
                            </HashLink>
                        </p>
                    </div>
                    <MDBAccordion className='linksFooter-sm' borderless initialActive={""} >
                        <MDBAccordionItem collapseId={1} headerTitle='Links' > 
                        <p>
                            <HashLink to='/Training#TrainingTime' className='text-reset'>
                                Training Time
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/#News' className='text-reset'>
                                Important News
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/Contact#SubscribePlans' className='text-reset'>
                                Subscribe Plans
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to='/#SomeTeams' className='text-reset'>
                                Teams
                            </HashLink>
                        </p>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <div className='linksFooter-lm'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p>
                            <MDBIcon icon="home" className="me-2" />
                            Nasr City, Jewel Club, EG
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            info@example.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                        </p>
                        <p>
                            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                        </p>
                    </div>
                    <MDBAccordion className='linksFooter-sm' borderless initialActive={""} >
                            <MDBAccordionItem collapseId={1} headerTitle='Contact' > 
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Nasr City, Jewel Club, EG
                            </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBAccordionItem>
                    </MDBAccordion>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Copyright: <HashLink className='text-reset fw-bold' to='#!'> Programer.com</HashLink> -
            <span> Created by: <span className='fw-bold'> Omar Tarek</span></span>
        </div>
        </MDBFooter>
    );
}

export default footer