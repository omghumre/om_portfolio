import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import BigTitle from '../subComponents/BigTitle'

import astronaut from '../assets/Images/spaceman.png'

import ParticleComponent from '../subComponents/ParticleComponent'


const Box=styled.div`
    background-color: ${props => props.theme.body};
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 100%;
        height: auto;
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 60vw;
    height: 70vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(2px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubutntu Mono', monospace;
    font-style: italic;
`

const AboutPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}> 
    

    
    <Box>
    {/* < LampDemo/> */}
    <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />
      <ParticleComponent theme='dark'/>
      
      

      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>

      <Main>
        Labore aute nostrud occaecat eiusmod nulla ea mollit duis reprehenderit reprehenderit anim commodo Lorem dolore. 
<br/><br/>
Commodo sit cupidatat ea fugiat ullamco minim. Proident mollit quis deserunt tempor ipsum pariatur. 
<br/><br/>
Commodo sit cupidatat ea fugiat ullamco minim. Proident mollit quis deserunt tempor ipsum pariatur. 

      </Main>
      
      <BigTitle text="ABOUT" top='10%' right='65%' />
      {/* <BigTitle text="ABOUT" top='70%' right='10%' /> */}
    </Box>
    </ThemeProvider>

  )
}

export default AboutPage
