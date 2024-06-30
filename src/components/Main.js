import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { NavLink } from 'react-router-dom'
import { YinYang } from './Allsvg'


const MainContainer = styled.div`
  background: ${props => props.theme.body}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight:500;
  }


`



const Container = styled.div`
  padding: 0rem;
`
const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position:absolute;
  top: 2rem;
  right: 3vw;
  text-decoration: none;
  z-index: 1;
  `

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position:absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%,-50%);
  right: 3vw;
  text-decoration: none;
  z-index: 1; 
`

const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position:absolute;
  top: 50%;
  transform: translate(-50%,-50%) rotate(-90deg) ;
  left  : 3rem;
  text-decoration: none;
  z-index: 1; 
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1; 
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1; 
`

const TopBar = styled.div`
    position: absolute;
    top: 2.2rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
const EDUCATION = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1; 
`

const PROJECTS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1; 
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%' };
    left: ${props => props.click ? '92%' : '50%' };
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    transition: all 1s ease;

    &>:first-child{
      animation: ${rotate} infinite 1.5s linear
    }

    &>:last-child{
      display: ${props => props.click ? 'none' : 'inline-block' };
      padding-top: 1rem;
    }
    `



const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Container>
      <PowerButton/>
      <LogoComponent/>
      <SocialIcon/>

      <Center click={click}>
        <YinYang onClick={() => handleClick()}  width={click ? 120:200} height={click ? 120:200} fill='currentColor' />
        <span>Click here</span>
      </Center>

      <Contact target="_blank" to="mailto:omghumre74@gmail.com">
        <h2  target="_blank" to="mailto:omghumre74@gmail.com">
          Say hello..
        </h2>
      </Contact>

      <BLOG to="/blog">
        <h2>
          Blogs
        </h2>
      </BLOG>

      <WORK to="/work">
        <h2>
          Work
        </h2>
      </WORK>

      <TopBar>
      <ABOUT to="/about">
        <h2>
          About.
        </h2>
      </ABOUT>
      
      <SKILLS to="/skills">
        <h2>
          Skills.
        </h2>
      </SKILLS>

      
      </TopBar>

      <BottomBar>
      <EDUCATION to="/education">
        <h2>
          Education.
        </h2>
      </EDUCATION>
      
      <PROJECTS to="/projects">
        <h2>
          Projects.
        </h2>
      </PROJECTS>
      </BottomBar>

      </Container>
    </MainContainer>
  )
}

export default Main
