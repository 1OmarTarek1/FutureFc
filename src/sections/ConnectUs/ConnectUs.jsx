

import { MDBBtn } from 'mdb-react-ui-kit'
import { SectionHeader, SectionWrapper } from '../../components'
import './ConnectUs.css'

const ConnectUs = () => {
  return (
    <>
        <div className="ContactUs" id='ContactUs'>
        <SectionWrapper>
                <div className="main-heading">
                    <SectionHeader>
                        تواصل معنا
                    </SectionHeader>
                <p>
                    يمكنك التواصل معنا عبر ارسال رسالة علي الميل الخاص بنا او من خلال احدي الارقام
                    التالية او يمكنك زيارتنا في مكان التدريب بالعنوان التالي .
                </p>
                </div>
                <div className="content">
                    <form className='fromInputs mb-3' action="">
                        <input autoComplete='on' className="main-input" type="text" name="name" placeholder="اسمك" />
                        <input autoComplete='on' className="main-input" type="email" name="mail" placeholder="البريد الالكتروني او رقم الهاتف" />
                        <textarea className="main-input" name="message" placeholder="الرسالة الخاصة بك" style={{minHeight:"150px"}}/>
                        <MDBBtn autoComplete='on' tag='input' type='submit' value='ارسال' size='lg' color='warning'  />
                    </form>
                    <div className="info">
                        <div className='info-bx'>
                            <h5 className=''>
                                ارقام للتواصل
                            </h5>
                            <div style={{direction:"ltr", textAlign:"end"}}>
                                <span className="phone">+00 123.456.789</span>
                                <br />
                                <span className="phone">+00 123.456.789</span>
                            </div>
                        </div>
                        <div className='info-bx'>
                            <h5>اين نحن</h5>
                            <address>
                                نادي جويل <span style={{fontSize:"12px", color:"var(--color-light-dark)"}}> ( توليب سابقا ) </span>
                                <br />
                                زهراء ، مدينة نصر
                                <br />
                                القاهرة
                            </address>
                        </div>
                    </div>
                </div>
        </SectionWrapper>
        </div>
    </>
  )
}

export default ConnectUs