import './HowStartLive.css'


import { SectionHeader } from '../../../components'



const HowStartLive = () =>{
    return(
        <>
        <div className='how-start-live' id='ImportantNews'>
            <SectionHeader>
                <span className='how-to-start-title'>
                اهم <em>العناوين </em>
                </span>
            </SectionHeader>

            <div className='all-info-cards'>
                <div className='content-wrapper'>
                    <div className='info-card'>
                        <h5>مبارايات السبت</h5>
                        <p>
                        بعض الاخبار الحصرية عن الاكاديمية ومعلومات عن مواعيد
                        التدريب وكل ما يخص الافريق بجميع المواليد
                        .بعض الاخبار الحصرية عن الاكاديمية 
                        </p>
                    </div>
                </div>

                <div className='content-wrapper'>
                    <div className='info-card'>
                        <h5>مبارايات الجمعة</h5>
                        <p>
                        بعض الاخبار الحصرية عن الاكاديمية ومعلومات عن مواعيد
                        التدريب وكل ما يخص الافريق بجميع المواليد
                        .بعض الاخبار الحصرية عن الاكاديمية 
                        </p>
                    </div>
                </div>

                <div className='content-wrapper'>
                    <div className='info-card'>
                        <h5>بطولة الشتاء</h5>
                        <p>
                        بعض الاخبار الحصرية عن الاكاديمية ومعلومات عن مواعيد
                        التدريب وكل ما يخص الافريق بجميع المواليد
                        .بعض الاخبار الحصرية عن الاكاديمية 
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}


export default HowStartLive