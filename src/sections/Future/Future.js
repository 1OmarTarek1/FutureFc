
import React from 'react'

import './Future.css'
import Coaches_01 from '../../assets/images/coaches-01.jpg'
import Coaches_02 from '../../assets/images/coaches-02.jpg'
import Coaches_03 from '../../assets/images/coaches-03.jpg'

// import Future from '../../assets/images/Future'

const Future = () => {
return (
    <>
    {/* <!-- Carousel wrapper --> */}
    <div 
    id="carouselBasicExample" 
    className="carousel slide carousel-fade mb-9" 
    style={{zIndex:"0"}}
    data-mdb-ride="carousel" 
    data-mdb-carousel-init>
    {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
            <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner">
            {/* <!-- Single item --> */}
            <div className="carousel-item active">
            <img src={Coaches_01}
            className="img-fluid d-block w-100" 
            alt="Sunset Over the City" />
            <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
            <img src={Coaches_02}
            className="d-block w-100" 
            alt="Canyon at Nigh" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
            <img src={Coaches_03}
            className="d-block w-100" 
            alt="Cliff Above a Stormy Sea" />
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
            </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button 
        className="carousel-control-prev" 
        type="button" 
        data-mdb-target="#carouselBasicExample" 
        data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button 
        className="carousel-control-next"
        type="button" 
        data-mdb-target="#carouselBasicExample" 
        data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    {/* <!-- Carousel wrapper --> */}
    </>
)
}

export default Future