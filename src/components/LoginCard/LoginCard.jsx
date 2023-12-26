import { MDBBtn, MDBCheckbox, MDBInput  } from 'mdb-react-ui-kit';

import './LoginCard.css'



const LoginCard = ( props ) => {
    return (
        <>
        <div className={props.boxClass}>
                <div className="title">{props.title}</div>
                <form action="">

                    {props.userInput}
                    
                    <div className='d-flex align-items-center position-relative'>
                        <MDBInput autoComplete="on" label='Email Address' id={props.emailID}  type='email' size='lg' contrast  />
                        <i className="fa-regular fa-envelope" /> 
                    </div>

                    <div className='d-flex align-items-center position-relative'>
                        <MDBInput autoComplete="on" label={props.passLabel} id={props.passID} type='password' size='lg' contrast  /> 
                        <span className='eyeWrapper'>
                            <i className="fa-regular fa-sm eye fa-eye-slash" />
                        </span> 
                    </div>

                    {props.passItems}

                    <div className='list03 d-flex justify-content-between'> {/* Check Box Line */}
                        <MDBCheckbox name='flexCheck' value='' id={props.checkID} label={props.checkBxTxt} defaultChecked />
                        {props.forgetPass}
                    </div>

                    <MDBBtn  tag='input' type='submit' value={props.buttonValue} size='lg' color='warning'  />
                    
                    <div className='d-flex gap-2 justify-content-center' style={{fontSize:"13px"}}>
                        {props.bottomText} 
                        <input className={props.changeBxClass}  type='reset' value= {props.resetBtnValue} />
                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginCard