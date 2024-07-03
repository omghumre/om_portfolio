import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme } from '../components/Themes'
import {Design, Develope} from './Allsvg'

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

const MySkillsPage = () => {
  return (

    <ThemeProvider theme={lightTheme}> 
    <Box>
      <Main>
        <Title>
          <Design width={40} height={40} /> Designer
        </Title>
      </Main>
      <Main>
        <Title>
          <Develope width={40} height={40} /> Frontend Developer
        </Title>
      </Main>
    </Box>
    </ThemeProvider>

  )
}

export default MySkillsPage
