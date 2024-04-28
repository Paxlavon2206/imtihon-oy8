import React from 'react'


interface InputProps {
    text?: string
    className?: string
    type?: 'text' | 'password' | 'number'
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void}


export const Input = ({className, type, placeholder, value, onChange}: InputProps) => {
  return (
    <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  )
}
