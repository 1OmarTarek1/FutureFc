import { useEffect } from 'react';

import LoginBoxData from '../../Data/LoginBoxData';
import { LoginCard } from '../../components';

import './LoginBox.css'




const LoginBox = () => {
    const boxes = LoginBoxData.map(box => {
        return <LoginCard 
        key           = {  box.id             } 
        startIcn      = {  box.startIcn       }
        boxClass      = {  box.boxClass       } 
        title         = {  box.title          } 
        userInput     = {  box.userInput      } 
        emailID       = {  box.emailID        } 
        passItems     = {  box.passItems      } 
        passLabel     = {  box.passLabel      } 
        passID        = {  box.passID         } 
        checkBxTxt    = {  box.checkBxTxt     } 
        forgetPass    = {  box.forgetPass     } 
        checkID       = {  box.checkID        } 
        buttonValue   = {  box.buttonValue    } 
        bottomText    = {  box.bottomText     }
        resetBtnValue = {  box.resetBtnValue  }
        changeBxClass = {  box.changeBxClass  }
        />
        
    })     
    useEffect(() => {
        let BigBOx = document.querySelector( ".bigBox"   ) ; 
        let close  = document.querySelector( ".closeIcn" ) ;

        let loginLink    = document.querySelector( ".loginLink"    ) ;
        let GoLogin      = document.querySelector( ".GoLogin"      ) ;
        let BackLogin    = document.querySelector( ".BackLogin"    ) ;
        let GoSignUp     = document.querySelector( ".GoSignUp"     ) ;
        let GoForgetPass = document.querySelector( ".GoForgetPass" ) ;

        let Login_Box      = document.querySelector( ".Login-Box"      ) ;
        let SignUp_Box     = document.querySelector( ".SignUp-Box"     ) ;
        let ForgetPass_Box = document.querySelector( ".ForgetPass-Box" ) ;


        loginLink.addEventListener('click', () => { // Open The Main Box
            BigBOx.style.transform = "translate(-50% , -50%) scale(1)"
            BigBOx.style.opacity = "1"
        })
        close.addEventListener('click', () => { // Close The Main Box
            BigBOx.style.transform = "translate(-50% , -50%) scale(0.0000001)"
            BigBOx.style.opacity = "0"
        })

        GoSignUp.addEventListener('click', () => { // Open SignUP Box
            Login_Box.style.opacity = "0"
            Login_Box.style.top = "1300px"
            SignUp_Box.style.top = "50%"
            SignUp_Box.style.opacity = "1"
        })
        GoLogin.addEventListener('click', () => { // Back To Login Box
            Login_Box.style.opacity = "1"
            Login_Box.style.top = "50%"
            SignUp_Box.style.opacity = "0"
            SignUp_Box.style.top = "-500px"
        })

        GoForgetPass.addEventListener('click', () => { // Open Forget Password Box
            Login_Box.style.opacity = "0"
            Login_Box.style.transform = "translate(-50%, -50%) scale(.0000000000000001)"
            ForgetPass_Box.style.transform = "translate(-50%, -50%) scale(1)"
            ForgetPass_Box.style.opacity = "1"
        })
        BackLogin.addEventListener('click', () => { // Back To Login Box
            Login_Box.style.transform = "translate(-50%, -50%) scale(1)"
            Login_Box.style.opacity = "1"
            ForgetPass_Box.style.opacity = "0"
            ForgetPass_Box.style.transform = "translate(-50%, -50%) scale(.0000000000000001)"
        })


        // Show And Hide Password
        let passwordEye = document.querySelectorAll('.eye');
        let IL= passwordEye.length;

        let passInput = document.querySelectorAll('input[type="password"]');
        let PL = passInput.length

        passwordEye.forEach(eye => {
            eye.addEventListener('click', () => {
                if( eye.classList[ IL - 1 ] === "fa-eye-slash" ){
                    for ( let i = 0 ; i < PL ; i++ ) { //Change all ( Eye and  eye slash ) 
                        passwordEye[i].classList.remove('fa-eye-slash'); 
                        passwordEye[i].classList.add('fa-eye'); 
                    };
                    for ( let i = 0 ; i < PL ; i++ ) { //Change All passwords to text
                        passInput[i].type = "text" 
                    };
                }
                else if( eye.classList[ IL - 1 ] === "fa-eye" ){ // Same Updates 
                    for ( let i = 0 ; i < PL ; i++ ) {
                        passwordEye[i].classList.remove('fa-eye'); 
                        passwordEye[i].classList.add('fa-eye-slash'); 
                    };
                    for ( let i = 0 ; i < PL ; i++ ) { passInput[i].type = "password" };
                }
                else(console.log("Sorry Failed To Show Password"))
            })
        })

    }, [] );
    return (
    <>
        <div className='bigBox container'>
            <div className='close'>
                <span className="closeIcn">
                    <i className="fa-regular fa-circle-xmark fa-xl" />
                </span>
            </div>
            {boxes}
        </div>
    </>
    )
}




export default LoginBox