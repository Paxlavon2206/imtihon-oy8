import React from "react"


type ButtonProps = {
    text?: string,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset',
    children?: React.ReactNode
}



 export const Button = ({ text, onClick, className, disabled, type, children }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {text}
      {children}
    </button>
  )
}
