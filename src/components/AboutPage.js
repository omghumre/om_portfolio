import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from '../components/Themes'

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
    position: fixed;
    overflow: hidden;

`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
    position: absolute;
    top: 5%;
    right: 2%;
    width: 17vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 100%;
        height: auto;
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 1.5rem;
    width: 70vw;
    height: auto;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(2px);

    position: absolute;
    left: calc(5rem + 2vw);
    top: 8rem;

    font-family: 'Ubutntu Mono', monospace;
    font-style: italic;

    @media screen and (max-width: 700px) {
    left: 2.5rem;
    top: 10rem;
    height: auto;
  }
`

const AboutPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}> 
    

    
    <Box>
    
    <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />
      <ParticleComponent theme='dark'/>
      
      

      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>

      <Main>
      Hey, I am Om Ghumre. A Machine Learning Enthusiast and Front-end Developer/React Developer from India who loves to convert data into information and visualize code. I use React.js to build the web application interfaces and the functionalities. At the moment, I am pursuing my Bachelor's degree in Computer Science with specialization in AIML.
        <br/><br/>
        My first programming language was C. Since then, I've learnt C++, Java, and Python. I also played around with databases. 
I am an eager problem solver and software developer who enjoys travelling. I enjoy leveraging my skills in competitive programming and software development to solve complex problems.
<br/><br/>
The only way to do great work is to love what you do. I love my work and enjoy each and every project I do. Feel free to look at my portfolio and don't hesitate to contact me.

      </Main>
      
      <BigTitle text="ABOUT" top='10%' right='80%' />
      <BigTitle text="A B O U T" top='75%' right='5%' />
    </Box>
    </ThemeProvider>

  )
}

export default AboutPage
