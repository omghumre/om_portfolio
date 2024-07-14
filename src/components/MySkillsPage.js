import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'
import {Design, Develope} from './Allsvg'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import ParticleComponent from '../subComponents/ParticleComponent'

import BigTitle from '../subComponents/BigTitle'
import SparklesPreview from '../test'


const Box=styled.div`
    background-color: ${props => props.theme.body};
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    

`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: transparent;
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
      background-color: rgba(255,255,255,0.6);
      backdrop-filter: blur(2px);
    }



    `

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    // do this when hover on main
    ${Main}:hover &{  
    color: ${props => props.theme.body};
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
      <ParticleComponent theme='dark'/>
      {/* <SparklesPreview /> */}
      {/* <auroraComponent /> */}
      
      <Main>
        <Title>
          <Design width={40} height={40} fill="currentColor"  /> Designer
        </Title>

        <Description>
          This is Description for first skills
        </Description>

        <Description>
          <strong>I like to design</strong>
          <ul>
            <li>Web design</li>
            <li>mobile app</li>
          </ul>
        </Description>

        <Description>
          <strong>Tools</strong>
          <ul>
            <li>Figma</li>
          </ul>
        </Description>

      </Main>
      
      <Main>
        <Title>
          <Develope width={40} height={40} fill="currentColor"/> Frontend Developer
        </Title>

        <Description>
          This is Description for second skills
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>HTml css js </p>
        </Description>

        <Description>
          <strong>Tools</strong>
          <p>Github</p>
        </Description>
      </Main>
      

      <BigTitle text="Skills" top='10%' right='45%' />

    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
