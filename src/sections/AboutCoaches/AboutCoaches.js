import React from 'react'
import { SectionWrapper, SectionHeader } from '../../components'
import  { Coaches }  from '../../sections'

import './AboutCoaches.css'

const AboutCoaches = () => {
  return (
    <>
        <div className='aboutCoaches' id='Coaches'>
        <SectionHeader>الجهاز الفني</SectionHeader>

            {/* Tabs */}
                <Coaches />
            {/* Tabs */}

            <SectionWrapper>
                {/*  content  */}
                <div className="allContentPlans tab-content" id="ex1-content">  

                    {/* C.Ahmed */}
                    <div 
                        className       ="tab-pane fade show active" 
                        id              ="ex1-tabs-1" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-1"
                    >
                        coach 1
                    </div>

                    {/* C.Kariem */}
                    <div 
                        className       ="tab-pane fade" 
                        id              ="ex1-tabs-2" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-2"
                    >
                        coach 2
                    </div>

                    {/* C.Omar */}
                    <div 
                    className       ="tab-pane fade" 
                    id              ="ex1-tabs-3" 
                    role            ="tabpanel" 
                    aria-labelledby ="ex1-tab-3"
                    >
                        coach 3
                    </div>

                    {/* C.Mohamed */}
                    <div 
                        className       ="tab-pane fade" 
                        id              ="ex1-tabs-4" 
                        role            ="tabpanel" 
                        aria-labelledby ="ex1-tab-4"
                        >
                        coach 4
                    </div>

                </div>
                {/*  content  */}
            </SectionWrapper>
        </div>
    </>
  )
}

export default AboutCoaches