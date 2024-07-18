import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../components/Themes';

import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';

import { Work } from "../data/ProjectData";
import Card from "../subComponents/Card";
import { YinYang } from './Allsvg';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: 400vh;
  display: flex;
  align-items: center;
  // z-index: 0;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    // position: fixed;
    
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  // z-index: 1

  @media (max-width: 700px) {
    position: relative;
    left: 0;
    flex-direction: column;
    height: auto;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  @media (max-width: 700px) {
    display: none
    }
`;


const Container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
};

const ProjectPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (window.innerWidth > 700) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
        yinyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`;
      } else {
        element.style.transform = `translateY(${-window.pageYOffset}px)`;
        yinyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`;
      }
    }

    window.addEventListener('scroll', rotate);

    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
      
          <LogoComponent theme='dark' />
          <PowerButton theme='dark' />
          
          <SocialIcon theme='dark' />
        

        <Main ref={ref} variants={Container} initial='hidden' animate='show'>
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main>


        <Rotate ref={yinyang}>
          
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="Projects" top='5%' right='10%' />
      </Box>
    </ThemeProvider>
  )
}

export default ProjectPage;
