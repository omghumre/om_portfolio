import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { NavLink } from 'react-router-dom'


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
  padding: 2rem;
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
    top: 3rem;
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

const Main = () => {
  return (
    <MainContainer>
      <Container>
      <PowerButton/>
      <LogoComponent/>
      <SocialIcon/>

      <Contact target="_blank" to={{pathname:"mailto:omghumre74@gmail.com"}}>
        <h2  target="_blank" to={{pathname:"mailto:omghumre74@gmail.com"}}>
          Say hello..
        </h2>
      </Contact>

      <BLOG to="/blog">
        <h2>
          Blog
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
