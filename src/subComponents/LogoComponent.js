import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import {motion} from 'framer-motion'

const Logo = styled(motion.h1)`
    display: inline-block;
    mix-blend-mode: difference; filter: invert(1);
    font-family: 'Pacifico',cursive;
    position: fixed;
    left: 2rem;
    top: 2.3rem;
    z-index: 3;
    cursor:pointer;
    font-size: 40px;

    @media screen and (max-width: 700px) {
    font-size: 25px;
  }
    
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