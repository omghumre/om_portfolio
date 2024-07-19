import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from '../components/Themes'
import {Coding, Develope, Design, Machine} from './Allsvg'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import ParticleComponent from '../subComponents/ParticleComponent'

import BigTitle from '../subComponents/BigTitle'

const Box=styled.div`
    background-color: ${props => props.theme.body};
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 0;
    
  }

    

`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: transparent;
    padding: 2rem;
    width: 40vw;
    height: auto;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;
    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5rem;
    box-sizing: border-box; /* Include padding and border in the width and height */

    &:hover{
      background-color: rgba(255,255,255,0.6);
      backdrop-filter: blur(2px);
    }

    @media (max-width: 700px) {
        top: 5rem;
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    margin-top: 10rem;
    margin-right: 2rem;
    overflow-x: hidden;  /* Prevent horizontal overflow */

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        overflow-y: hidden;
        margin-right: 1rem; /* Remove right margin on mobile view */
        margin-left: 1rem;  /* Adjust left margin if needed */

        & > div:last-child {
            margin-bottom: 10rem;
        }
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

      <Grid>
      
      <Main>
        <Title>
        <Machine width={80} height={40} fill="currentColor"/> 
        Machine Learning
        </Title>

        <Description>
          I Love to convert data into Information
        </Description>

        <Description>
          <strong>Experties</strong>
          <p>Generative AI, Deep Learning , Natural Language Processing, Computer Vision</p>
        </Description>

        <Description>
          <strong>libraries</strong>
          <p>Scikit-Learn, Numpy, Pandas, Streamlit, Tensorflow, Joblib, Keras, Matplotlib</p>
        </Description>

      </Main>
      
      <Main>
        <Title>
          <Coding width={80} height={40} fill="currentColor"/> 
          Coding Profile
        </Title>

        <Description>
          <strong>Programming Language</strong>
          <p>C/C++, Python, Java, Go</p>
        </Description>

        <Description>
          <strong>Leetcode</strong>
          <p>Listed in top 15% users with Rating of 1650+</p>
          <p>Solved 300+ questions </p>
          <p>Attended 25+ contest</p>
        </Description>

        <Description>
          <strong>CodeChef</strong>
          <p>Global Rank 26801</p>
          <p>Highest Rating 1540</p>
        </Description>
      </Main>

      <Main>
        <Title>
          <Design width={60} height={40} fill="currentColor"/> Frontend Developer
        </Title>

        <Description>
          I Love crafting clean, minimalistic designs that can speak. 
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>Html, Css, Js, React, Bootstrap, Tailwind</p>
        </Description>

        <Description>
          <strong>Tools</strong>
          <p>VScode, Git, Github, Codepen, Figma etc.</p>
        </Description>
      </Main>

      <Main>
        <Title>
          <Develope width={80} height={40} fill="currentColor"/> Research work
        </Title>

        <Description>
        <h4>Crafting Visual Art from Text: A Generative Approach</h4>
        </Description>
        <Description>
        A LoRA Model for Stable Diffusion to generate anime-style image.
        </Description>
        <Description>
          Paper presented at ICACEBD 2024,
          Published in scopus indexed journal
        </Description>

        
      </Main>
      
      </Grid>

      <BigTitle text="Skills" top='10%' right='45%' />

    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
