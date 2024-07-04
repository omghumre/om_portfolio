import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import ParticleComponent from '../subComponents/ParticleComponent'

import astronaut from '../assets/Images/spaceman.png'
import LampDemo from '../LampComponent'


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
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubutntu Mono', monospace;
    font-style: italic;
`

const AboutPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}> 
    < LampDemo />
    <Box>
    {/* < LampDemo/> */}
      <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />

      

      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>

      <Main>
        Labore aute nostrud occaecat eiusmod nulla ea mollit duis reprehenderit reprehenderit anim commodo Lorem dolore. Eiusmod pariatur Lorem tempor laboris est officia nostrud ullamco proident.
<br/><br/>
Commodo sit cupidatat ea fugiat ullamco minim. Proident mollit quis deserunt tempor ipsum pariatur. Consectetur excepteur tempor adipisicing Lorem incididunt nisi do reprehenderit mollit.
<br/><br/>
Dolor nostrud nostrud reprehenderit laboris sunt dolore deserunt. Minim aliqua anim enim aliqua et irure esse. 
      </Main>
      
      
    </Box>
    </ThemeProvider>

  )
}

export default AboutPage
