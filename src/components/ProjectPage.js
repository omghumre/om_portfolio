import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../components/Themes';
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import { Work } from '../data/ProjectData';
import Card from '../subComponents/Card';
import { YinYang } from './Allsvg';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const Box = styled.div`
  background-color: ${({ theme }) => theme.body};
  height: ${({ $height }) => $height};
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 7rem;
  left: calc(10rem + 15vw);
  display: flex;
  gap: 5rem;
  color: white;

  @media (max-width: 700px) {
    position: relative;
    left: 0;
    flex-direction: column;
  }
`;

const Rotate = styled.span`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } }
};

const ProjectPage = () => {
  const listRef = useRef(null);
  const yinRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState('100vh');

  // resize Box height to fit any number of projects
  useLayoutEffect(() => {
    const update = () => {
      if (!listRef.current) return;
      const horiz = listRef.current.scrollWidth;
      const vert = listRef.current.scrollHeight;
      setBoxHeight(window.innerWidth > 700 ? `${horiz}px` : 'auto');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // scroll → translate() / rotate()
  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current || !yinRef.current) return;
      const offset = -window.pageYOffset;
      if (window.innerWidth > 700) {
        listRef.current.style.transform = `translateX(${offset}px)`;
      } else {
        listRef.current.style.transform = `translateY(${offset}px)`;
      }
      yinRef.current.style.transform = `rotate(${offset}deg)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box $height={boxHeight}>
        <LogoComponent theme='dark' />
        <PowerButton theme='dark' />

        <Main ref={listRef} variants={Container} initial='hidden' animate='show'>
          {[...Work]
            .sort((a, b) => b.id - a.id)
            .map((d) => (
              <Card key={d.id} data={d} />
            ))}
        </Main>


        <Rotate ref={yinRef}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text='Projects' top='5%' right='10%' />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectPage;
