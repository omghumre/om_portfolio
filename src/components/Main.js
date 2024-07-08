import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import { YinYang } from './Allsvg'
import Intro from './intro'
// import auroraComponent from '../subComponents/auroraComponent'


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

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight:500;
    margin: 0; /* Reset default margin */
    font-size: 1.2rem; /* Adjust font size as needed */
    font-weight:600;
  }

  h6 {
  font-family: "Playwrite CO", cursive;
  font-weight: 300;
  font-style: normal;
    font-size: 1.8rem;
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
  font-size: 40px;
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
  color: ${props => props.click ? props.theme.body : props.theme.text};
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
  color: ${props => props.click ? props.theme.body : props.theme.text};
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
const CERTIFICATES = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
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

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #000;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%' };
    height: ${props => props.click ? '100%' : '0%' };
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      
      <DarkDiv click={click}/>

      <Container>
      
      <PowerButton/>
      <LogoComponent theme = {click ? 'dark' : 'light'}/>
      <SocialIcon theme = {click ? 'dark' : 'light'}/>

      
      <Center click={click}>
        <YinYang onClick={() => handleClick()}  width={click ? 120:200} height={click ? 120:200} fill='currentColor' />
        <span>Click here</span>
      </Center>

      <Contact target="_blank" to="mailto:omghumre74@gmail.com">
        <motion.h6

          initial={{
            y:-200,
            transition: {type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: {type:'spring', duration: 1.5, delay:1}
          }}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Hello..
        </motion.h6>
      </Contact>

      <BLOG to="/blog">
      <motion.h2

initial={{
  y:-200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Blogs
        </motion.h2>
      </BLOG>

      <WORK click={click} to="/work">
      <motion.h2

initial={{
  y:-200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Work
        </motion.h2>
      </WORK>

      <TopBar>
      <ABOUT click={click} to="/about">
      <motion.h2

initial={{
  y:-200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          About.
        </motion.h2>
      </ABOUT>
      
      <SKILLS to="/skills">
      <motion.h2

initial={{
  y:-200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Skills.
        </motion.h2>
      </SKILLS>

      
      </TopBar>

      <BottomBar>
      <CERTIFICATES click={click} to="/certificates">
      <motion.h2

initial={{
  y:200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Certificates.
        </motion.h2>
      </CERTIFICATES>
      
      <PROJECTS to="/projects">
      <motion.h2

initial={{
  y:200,
  transition: {type:'spring', duration: 1.5, delay:1}
}}
animate={{
  y:0,
  transition: {type:'spring', duration: 1.5, delay:1}
}}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          Projects.
        </motion.h2>
      </PROJECTS>
      </BottomBar>

      </Container>

      {click ? <Intro click={click}/> : null}
    </MainContainer>
  )
}

export default Main
