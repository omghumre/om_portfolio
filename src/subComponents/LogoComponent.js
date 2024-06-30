import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    font-family: 'Pacifico',cursive;
    position: fixed;
    left: 2rem;
    top: 1.5rem;
    z-index: 3;
    cursor:pointer;
`

const LogoComponent = () => {
  return (
    <Logo>
        OmG
    </Logo>
  )
}

export default LogoComponent