import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'
import {Design, Develope} from './Allsvg'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import ParticleComponent from '../subComponents/ParticleComponent'

import SparklesPreview from '../test'


const Box=styled.div`
    background-color: ${props => props.theme.body};
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;
    font-family: 'Ubuntu Mono', monospace ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    &:hover{
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
    }

    `

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    // do this when hover on main
    ${Main}:hover &{
      &>*{
        fill: ${props => props.theme.body};
      }
    }

    &>* : first-child{
      margin-right: 1rem;
    }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p {
    margin-left: 2rem;
  }

  ${Main}:hover &{
    
      color: ${props => props.theme.body};
    
  }
    
`

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}> 
    
    <Box>

      <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />
      {/* <ParticleComponent theme='dark'/> */}
      {/* <SparklesPreview /> */}
      {/* <auroraComponent /> */}
      
      
      
    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
