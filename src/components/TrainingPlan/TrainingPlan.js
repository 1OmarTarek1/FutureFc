import React from 'react'

import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { Training2009, Training2011, Training2013, Training2015 } from './index'
import './TrainingPlan.css'


const TrainingPlan = () => {
  return (
    <>
                {/* <!-- Tabs navs --> */}
                <ul className="trainingPlans nav nav-tabs" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                        className="nav-link active"
                        id="ex1-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        >2009</a>
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
                        >2011</a>
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
                        >2013</a>
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
                        >2015</a>
                    </li>
                </ul>
                {/* <!-- Tabs navs --> */}




            <SectionWrapper>
                {/* <!-- Tabs content --> */}
                <div className="allContentPlans tab-content" id="ex1-content">  

                    {/* 2009 */}
                    <div 
                        className       ="tab-pane fade show active" 
                        id              ="ex1-tabs-1" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-1"
                    >
                        <Training2009 />
                    </div>

                    {/* 2011 */}
                    <div 
                        className       ="tab-pane fade" 
                        id              ="ex1-tabs-2" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-2"
                    >
                        <Training2011 />
                    </div>

                    {/* 2013 */}
                    <div 
                    className       ="tab-pane fade" 
                    id              ="ex1-tabs-3" 
                    role            ="tabpanel" 
                    aria-labelledby ="ex1-tab-3"
                    >
                        <Training2013 />
                    </div>

                    {/* 2015 */}
                    <div 
                        className       ="tab-pane fade" 
                        id              ="ex1-tabs-4" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-4"
                        >
                        <Training2015 />
                    </div>

                </div>
                {/* <!-- Tabs content --> */}
            </SectionWrapper>
    </>
  )
}

export default TrainingPlan