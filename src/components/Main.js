import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { YinYang } from './Allsvg';
import Intro from './intro';
// import {Suspense, lazy} from 'react';

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: fixed;

h2,h3,h4,h5{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}


`
    

const Container = styled.div`
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Contact = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  position: absolute;
  top: 2rem;
  right: 3vw;
  text-decoration: none;
  z-index: 1;
  font-size: 40px;
  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

const BLOG = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: 3vw;
  text-decoration: none;
  z-index: 1;
  @media screen and (max-width: 700px) {
    transform: rotate(90deg) translate(-50%, -50%);
    top: calc(50% - 4vh)
  }
`;

const WORK = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  left: 3rem;
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 700px) {
    transform: translateY(-50px) rotate(-90deg);
    left: 0.3rem;
  }
`;

const ABOUT = styled(NavLink)`
color: #000;
  mix-blend-mode: difference; filter: invert(1);
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 20%;
    left: 0.2rem;
    transform: rotate(-90deg);
    
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

@media screen and (max-width: 700px) {
    bottom: 30%;
    left: 0;
    right: 0;
    
  }
`;

const SKILLS = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  text-decoration: none;
  z-index: 10;

  @media screen and (max-width: 700px) {
    position: absolute;
    right: 1.3rem;
    transform: translateX(15px) rotate(90deg);
    z-index: 1;
    
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 2.2rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
@media screen and (max-width: 700px) {
    top: 20%;
    
  }
  
`;

const CERTIFICATES = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  text-decoration: none;
  z-index: 1;
  @media screen and (max-width: 700px) {
    position: absolute;
    right: -2rem;
    transform: rotate(90deg);
    z-index: 1;
    
  }
`;

const PROJECTS = styled(NavLink)`
  color: #000;
  mix-blend-mode: difference; filter: invert(1);
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 700px) {
    position: absolute;
    left: -0.5rem;
    transform: rotate(-90deg);
    z-index: 1;
    
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${props => (props.click ? '85%' : '50%')};
  left: ${props => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
    
  }

  & > :last-child {
    display: ${props => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }

  @media screen and (max-width: 700px) {
    transform: translate(-50%, -50%);
    top: ${props => (props.click ? '84%' : '50%')};
    left: ${props => (props.click ? '83%' : '50%')};
    transition: all 1s ease;
    
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #000;
  right: 50%;
  width: ${props => (props.click ? '50%' : '0%')};
  height: ${props => (props.click ? '100%' : '0%')};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media screen and (max-width: 700px) {
    top: 0;
    bottom: auto;
    height: ${props => (props.click ? 'calc(45%)' : '0%')};
    width: 100%;
    right: 0;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent  />
        <SocialIcon />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 110 : 190}
            height={click ? 110 : 190}
            fill='currentColor'
          />
          <span>Click here</span>
        </Center>

        <Contact to="/resume">
          <motion.h6
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire Me
          </motion.h6>
        </Contact>

        <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 0.6 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.6 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>

        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
      <TopBar>
        <ABOUT to="/about" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h2>
        </ABOUT>

        <SKILLS to="/skills" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
              
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            skills
          </motion.h2>
        </SKILLS>
        </TopBar>


        <BottomBar>
          <PROJECTS to="/projects">
          <motion.h2
            initial={{
              y: 700,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
          </PROJECTS>

          <CERTIFICATES to="/certificates" click={click}>
          <motion.h2
            initial={{
              y: 700,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }

            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Certificates
          </motion.h2>
          </CERTIFICATES>
        </BottomBar>
      </Container>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
