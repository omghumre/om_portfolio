import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import {motion} from 'framer-motion'

const Logo = styled(motion.h1)`
    display: inline-block;
    color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
    font-family: 'Pacifico',cursive;
    position: fixed;
    left: 2rem;
    top: 1.5rem;
    z-index: 3;
    cursor:pointer;
    font-size: 40px;
`

const Container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition:{
      staggerChildren: 1,
      duration: 1,
    }
  }
}

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}
    
    variants={Container} initial='hidden' animate='show'
    
    >
        OmG
    </Logo>
  )
}

export default LogoComponent