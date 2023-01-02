// icon
import React from 'react'
import Lg from '../../assets/icons/logo.svg'

// styles
import '../../styles/components/logo.scss'

export default function Logo({height, width}:React.CSSProperties) {
  return (
    <header style={{height: height, width : width}} className='logo'>
      <img src={Lg} alt="logo" />
    </header>
  )
}