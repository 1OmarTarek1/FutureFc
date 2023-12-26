import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

// ========================================   Control Panel   ======================================== //

// Set ID For Every Single Plan
const box_ID_01     =  "box_01"  ;
const box_ID_02     =  "box_02"  ;
const box_ID_03     =  "box_03"  ;




// ___________________________________ Box ___________________________________ //

// Inputs
let confirmPass  = <MDBInput autoComplete="on" label='Confirm Password'            id='typePass-00'     type='password' size='lg' contrast  /> ;

let userName     = <MDBInput autoComplete="on" label='@ Username'                  id='Username'        type='text'     size='lg' contrast  /> ;
let firstName    = <MDBInput autoComplete="on" label='First Name'                  id='FirstName'       type='text'     size='lg' contrast  /> ;
let lastName     = <MDBInput autoComplete="on" label='Last Name'                   id='lastName'        type='text'     size='lg' contrast  /> ;
let phoneNum     = <MDBInput autoComplete="on" label='Phone Number'                id='Number'          type='text'     size='lg' contrast  /> ;


// Check Boxes, Rests 
let linkReset    = <input className='GoLink GoForgetPass'  type='reset' value='Forgot password ?'   /> ;
let resetButton  = <MDBBtn className='resBtn' tag='input' type='reset' value='Reset' outline color='warning' size='sm'  />




// Icons
let passIcon  = <span className='eyeWrapper'><i className="fa-regular fa-sm eye fa-eye-slash" /></span> ;
let userIcon  = <i className="fa-regular fa-user "               /> ;
let phoneIcon = <i className="fa-solid fa-phone fa-rotate-270"   /> ;

// _____________________________________________________________________________  //

// =================================================================================================== //







// =======================================  PLan Card Objects  ======================================= //

const LoginBoxData = [

    { // box-01 Login
        id           :   box_ID_01                 , 
        boxClass     :  "box Login-Box"            , 
        title        :  "Login"                    ,   
        userInput    :  ""                         ,
        emailID      :  "emailID-01"               ,
        passItems    :  ""                         ,
        forgetPass   :  linkReset                  ,
        passLabel    :  "Password"                 ,
        passID       :  "passID-01"                ,
        checkID      :  "check-01"                 ,
        checkBxTxt   :  "Remember me"              ,
        buttonValue  :  "Login"                    ,
        bottomText   :  "Don't have an account ? " ,
        resetBtnValue:  "Register"                 ,
        changeBxClass:  "GoLink GoSignUp"          ,
    },


    { // box-02 Sign Up
        id           :  box_ID_02                , 
        boxClass     :  "box SignUp-Box "        , 
        title        :  "Sign Up"                ,
        userInput    :  <>
                            <div className='d-flex gap-4'>
                                <div className='d-flex align-items-center position-relative'>
                                    {firstName}
                                </div>
                                <div className='d-flex align-items-center position-relative'>
                                    {lastName}
                                </div>
                            </div>
                        </>                      ,
        passItems    :  <>
                            <div className='d-flex align-items-center position-relative'>
                                {confirmPass}
                                {passIcon}
                            </div>
                        </>                      ,
        emailID      :  "emailID-02"             ,
        forgetPass   :  resetButton              ,
        passLabel    :  "Password"               ,
        passID       :  "passID-02"              ,
        checkID      :  "check-02"               ,
        checkBxTxt   :  "Agree our terms"        ,
        buttonValue  :  "Sign Up"                ,
        bottomText   :  ""                       ,
        resetBtnValue:  "Already Have Account !" ,
        changeBxClass:  "GoLink GoLogin"         ,
    },


    { // box-03 Forget Password
        id           :   box_ID_03                   , 
        boxClass     :  "box ForgetPass-Box"         , 
        title        :  "Get Password"               ,
        userInput    :  <>
                            <div className='d-flex align-items-center position-relative'>
                                    {userName}
                                    {userIcon}
                            </div>
                                
                            <div className='d-flex align-items-center position-relative'>
                                {phoneNum}
                                {phoneIcon}
                            </div>
                        </>                          ,
        emailID      :  "emailID-03"                 ,
        passItems    :  ""                           ,
        forgetPass   : resetButton                   ,
        passLabel    :  "Last Password You Remember" ,
        passID       :  "passID-03"                  ,
        checkID      :  "check-03"                   ,
        checkBxTxt   :  "Agree our terms"            ,
        buttonValue  :  "Send"                       ,
        bottomText   :  ""                           ,
        resetBtnValue:  "Back To Login"              , 
        changeBxClass:  "GoLink BackLogin"           ,
    },

]



export default LoginBoxData