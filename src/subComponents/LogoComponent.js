import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };
    font-family: 'Pacifico',cursive;
    position: fixed;
    left: 2rem;
    top: 1.5rem;
    z-index: 3;
    cursor:pointer;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
        OmG
    </Logo>
  )
}

export default LogoComponent