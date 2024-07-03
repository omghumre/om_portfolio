import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme } from '../components/Themes'
import {Design, Develope} from './Allsvg'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'

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
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    font-family: 'Ubuntu Mono', monospace ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);
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
    
`

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={lightTheme}> 
    <Box>
      <LogoComponent />
      <PowerButton />
      <SocialIcon/>
      <Main>
        <Title>
          <Design width={40} height={40} /> Designer
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
          <Develope width={40} height={40} /> Frontend Developer
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
    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
