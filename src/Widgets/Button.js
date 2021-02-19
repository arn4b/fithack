import React from 'react'
import './Button.css'

const STYLES =[
    'btn--primary',
    'btn--secondary',
    'btn--outline'
]

const SIZE =[
    'btn--medium',
    'btn--large',
]
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const CheckButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return (
        <button className ={`btn ${checkButtonStyle} ${CheckButtonSize}`} onClick={onClick}
        type={type}>
             {children}
        </button>   
        
    )
}