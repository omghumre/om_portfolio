import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import {DarkTheme} from '../components/Themes'


const MainContainer = styled.div`
width: 100vw;
height: 100vh;
overflow:hidden;
position: fixed;
background-color: white;
`

const Container = styled.div`
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 700px) {
    padding-top: 6rem;
    height: 50vh;
    left:2rem;
  }
`

const Resume = () => {
  return (
    <MainContainer>
        <LogoComponent theme='dark' />
        <PowerButton theme='dark' />
        <SocialIcon theme='dark' />

        <Container>
        <iframe src="https://drive.google.com/file/d/1p_MZHcgXS6ZSD4OQdN8Z4Nh2bPDI0GEi/preview" width="56%" height="90%" top="5rem" allow="autoplay"></iframe>
        </Container>
    
    </MainContainer>
  )
}

export default Resume