import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'

import {Work} from "../data/WorkData";
import Card from "../subComponents/Card"


const Box=styled.div`
    background-color: ${props => props.theme.body};
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

`

// const Main = styled.div`
//     border: 2px solid ${props => props.theme.text};
//     color: ${props => props.theme.text};
//     padding: 2rem;
//     width: 60vw;
//     height: 70vh;
//     z-index: 3;
//     line-height: 1.5;

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: calc(0.6rem + 1vw);
//     backdrop-filter: blur(2px);

//     position: absolute;
//     left: calc(5rem + 5vw);
//     top: 10rem;

//     font-family: 'Ubutntu Mono', monospace;
//     font-style: italic;
// `

const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: white;
`

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}> 
    <Box>
    
    <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />
      
      <Main>
        {
          Work.map( d =>
            <Card key={d.id} data={d} >Work Data </Card>
          )
        }
      </Main>
      
    </Box>
    </ThemeProvider>

  )
}

export default WorkPage
