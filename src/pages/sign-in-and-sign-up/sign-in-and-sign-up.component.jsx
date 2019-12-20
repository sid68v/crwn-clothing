import React from 'react'
import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'

const LoginPage =()=>{
    return(
        <div className='login-page'>
         <SignIn/>
        </div>
    )
}

export default LoginPage