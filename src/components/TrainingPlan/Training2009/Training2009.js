import './Training2009.css'

import React from 'react'

const Training2009 = () => {
  return (
    <>
      <div className='plan2009-main'>
        <div className='miniTabs'>
          <div className="containStyle row w-100">

            <div className="tabsStyle col-3">
              {/* <!-- Tab navs --> */}
              <div
                className="trainingDays nav flex-column nav-tabs text-center"
                id="v-tabs-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-tabs-home-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-home"
                  role="tab"
                  aria-controls="v-tabs-home"
                  aria-selected="true"
                  >السبت</a>
                <a
                  className="nav-link"
                  id="v-tabs-profile-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-profile"
                  role="tab"
                  aria-controls="v-tabs-profile"
                  aria-selected="false"
                  >الاثنين</a>
                <a
                  className="nav-link"
                  id="v-tabs-messages-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-messages"
                  role="tab"
                  aria-controls="v-tabs-messages"
                  aria-selected="false"
                  >الخميس</a>
              </div>
              {/* <!-- Tab navs --> */}             
            </div>






            <div className="col-9  wid-md-100">
              {/* <!-- Tab content --> */}
              <div className="tab-content" id="v-tabs-tabContent">

                {/* السبت */}
                <div
                  className="mainContentStyle tab-pane fade show active"
                  id="v-tabs-home"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-tab"
                >
                  <div className='part part-1'>
                  <div className='title'>الجزء الاول</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد . التدريب
                    وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                  <div className='part part-2'> 
                  <div className='title'>الجزء الثاني</div>
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد . التدريب
                    وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>
                </div>

                {/* الاثنين */}
                <div
                  className="mainContentStyle tab-pane fade"
                  id="v-tabs-profile"
                  role="tabpanel"
                  aria-labelledby="v-tabs-profile-tab"
                >
                  <div className='part part-1'>
                  <div className='title'>الجزء الاول</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                  <div className='part part-2'> 
                  <div className='title'>الجزء الثاني</div>
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                  <div className='part part-3'>
                  <div className='title'>الجزء الثالث</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                </div>

                {/* الخميس */}
                <div
                  className="mainContentStyle tab-pane fade"
                  id="v-tabs-messages"
                  role="tabpanel"
                  aria-labelledby="v-tabs-messages-tab"
                >
                  <div className='part part-1'>
                    <div className='title'>الجزء الاول</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد . التدريب
                    وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                  <div className='part part-2'>
                  <div className='title'>الجزء الثاني</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد . التدريب
                    وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                  <div className='part part-3'>
                  <div className='title'>الجزء الثالث</div>                   
                    <p>
                    بعض الاخبار الحصرية عن
                    الاكاديمية ومعلومات عن مواعيد
                    التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد . التدريب
                    وكل ما يخص الافريق بجميع المواليد
                    . التدريب وكل ما يخص الافريق بجميع المواليد
                    </p>
                  </div>

                </div>

              </div>
              {/* <!-- Tab content --> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Training2009