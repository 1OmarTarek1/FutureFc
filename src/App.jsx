
//AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


//MDB
// import { mdb } from 'mdb-ui-kit';
import * as mdb from 'mdb-ui-kit'; // lib;
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs';
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.esm';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//to make navbar hide on scroll
import Headroom from 'react-headroom';
//to make scroll go to top on change components
import ScrollToTop from './components/ScrollToTop';

import 'react-lazy-load-image-component/src/effects/blur.css';


// import { useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';


import { Header, SecondHeader, Footer, LoginBox, Sidebar, Hero } from './sections/index'
import { 
        Home,      
        Profile, 
        T_2009, 
        T_2010, 
        T_2011, 
        News, 
        Training,
        About,
        Contact, 
        TeamsCardNews,
    }   from './Pages/index'
import { Container, UpButton } from './components/index'
import './App.css';







const App = () => {
    AOS.init();
    // NOTE !! =>>  ( When u Search about something in any page after click maybe scroll will stop 
    // and I Think the problem in the ScrollToTop.js file That file have function make scrolling to 
    // top in every component change )


    // useEffect(() => {
    //     let AllImages = document.querySelectorAll("img")
    //     AllImages.forEach(img => {
    //         img.setAttribute('loading', 'lazy');
    //     });
    // });


    return(
        <>
        {/* /FutureFc */}
            <Router basename='/FutureFc'> 
                <Headroom>
                    <Header /> 
                </Headroom>
                <Hero />
                <SecondHeader />
                
                <LoginBox />
                <Sidebar />

                <Container>
                    <Routes>
                        <Route     path = '/'             element = {<  Home     />}  />
                        <Route     path = '/Profile'      element = {<  Profile  />}  />

                        <Route     path = '/News'         element = {<  News     />}   />
                        <Route     path = '/News/TeamsCardNews' element = {<  TeamsCardNews />}   />

                        <Route     path = '/Else'>
                            <Route path ='/Else/Teams'>
                                <Route  path = '/Else/Teams/T_2009' element = {<  T_2009  />} />
                                <Route  path = '/Else/Teams/T_2010' element = {<  T_2010  />} />
                                <Route  path = '/Else/Teams/T_2011' element = {<  T_2011  />} />
                            </Route>
                            <Route      path = '/Else/About'        element = {<   About  />} />
                        </Route>

                        <Route    path = '/Training'      element = {<  Training      />}   />
                        <Route    path = '/Contact'       element = {<  Contact       />}   />

                    </Routes>
                </Container>

                <UpButton />
                <Footer />
                <ScrollToTop />
            </Router>
        </>

    )
}

export default App