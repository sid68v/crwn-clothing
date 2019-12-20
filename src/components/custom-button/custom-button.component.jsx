import React, { Children } from 'react'
import './custom-button.styles.scss'


const CustomButton = (props) => {
    const { children, signInWithGoogle, ...otherProps } = props;
    return (
        <button className={`${signInWithGoogle? "sign-in-google":""} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;