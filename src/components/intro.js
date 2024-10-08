import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/om4.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 57vw;
  height: 55vh;

  display: flex;

  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
  ) bottom,
  linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
  ) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index: 1;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    background: none;
    width: 60vw;
    height: auto;

    
  
  background-repeat: no-repeat;  
  background-size: 100% 2px;
  border: 2px solid white;
  outline-color: invert;
  
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .pic {
    width: auto;
    height: 62vh;
    overflow: hidden;
    transform: translateY(4px);

    @media screen and (max-width: 700px) {
      height: 16rem;
      z-index: 10;
      overflow: visible;
      transform: translateY(8px);
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    top: 0rem;
    overflow: hidden;
    z-index: 1;
  }
`;

const Text = styled.div`
font-size: calc(1em + 2.3vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 2.2vw);
    font-weight:300;
    padding-bottom: 0rem;
}

@media screen and (max-width: 700px) {
    padding: 1rem;
  }


  
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '75vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h2>I'm Om Ghumre</h2>
          <h2>Machine Learning Enthusiast and Frontend Developer.</h2>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
