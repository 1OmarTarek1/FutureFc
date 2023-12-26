import './Coaches.css'

import React from 'react'
import Ahmed    from '../../assets/images/coach-01.jpg'
import Kariem   from '../../assets/images/coach-02.jpg'
import Omar     from '../../assets/images/coach-03.jpg'
import Mohamed  from '../../assets/images/coach-04.jpg'

const Coaches = () => {
  return (
    <>
          {/* <!-- Tabs navs --> */}
          <ul className="coaches  nav nav-tabs" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
                <a
                className="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
                >
                  <div className='coachCard'>
                    <div className='img-wrapper'>
                      <img src={Ahmed} alt='' />
                    </div>
                    <span className='title'> احمد سعيد</span>
                    <p className='about-coach'>
                      كابتن احمد سعيد لاعب الزمالك ومنتخب مصر للشباب مدير الاكاديمية والمشرف العام ومؤسسها 
                    </p>
                  </div>
                </a>
            </li>

            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
                >
                  <div className='coachCard'>
                    <div className='img-wrapper'>
                      <img src={Kariem} alt='' />
                    </div>
                    <span className='title'>كريم اشرف</span>
                    <p className='about-coach'>
                      كابتن كريم اشرف لاعب طلائع الجيش السابق ومنتخب مصر للشباب المدير الفني للاكاديمية   
                    </p>
                  </div>
                </a>
            </li>

            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
                >
                  <div className='coachCard'>
                    <div className='img-wrapper'>
                      <img src={Omar} alt='' />
                    </div>
                    <span className='title'>عمر طارق</span>
                    <p className='about-coach'>
                      كابتن عمر طارق لاعب سابق بالاكاديمية مساعد مدرب والمسؤل عن قطاع البراعم بالاكاديمية 
                    </p>
                  </div>
                </a>
            </li>

            <li className="nav-item" role="presentation">
                <a
                className="nav-link"
                id="ex1-tab-4"
                data-mdb-toggle="tab"
                href="#ex1-tabs-4"
                role="tab"
                aria-controls="ex1-tabs-4"
                aria-selected="false"
                >
                  <div className='coachCard'>
                    <div className='img-wrapper'>
                      <img src={Mohamed} alt='' />
                    </div>
                    <span className='title'>محمد مصطفي</span>
                    <p className='about-coach'>
                    كابتن محمد مصطفي لاعب سابق بفريق مساعد مدرب والمسؤل عن قطاع الناشئين بالاكاديمية                     </p>
                  </div>
                </a>
            </li>
        </ul>
        {/* <!-- Tabs navs --> */}
    </>
  )
}

export default Coaches