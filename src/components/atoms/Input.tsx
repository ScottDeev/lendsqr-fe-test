import React from "react"

// styles
import '../../styles/components/input.scss'

type InputProps = {
  type: string,
  value: string,
  placeholder: string,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({type, value, placeholder, handleChange}: InputProps) {
  return (
    <>
      <input className="input" type={type} value={value} placeholder={placeholder} onChange={handleChange} />
    </>
  )
}