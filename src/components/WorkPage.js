import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme , DarkTheme} from '../components/Themes'

import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcon from '../subComponents/SocialIcon'

import {Work} from "../data/WorkData";
import Card from "../subComponents/Card"
import { useRef } from 'react'
import { YinYang } from './Allsvg'
import BigTitle from '../subComponents/BigTitle'


const Box=styled.div`
    background-color: ${props => props.theme.body};
    // width: 100%;
    height: 400vh;
    position: relative;
    display: flex;
    align-items: center; 


`
const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: white;
`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      
        element.style.transform = `translateX(${-window.pageYOffset}px)`
        yinyang.current.style.transform = `rotate(`+ -window.pageYOffset + `deg)`
    }

    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  },[])

  return (
    <ThemeProvider theme={DarkTheme}> 
    <Box>
    
    <LogoComponent theme='dark' />
      <PowerButton theme='dark' />
      <SocialIcon theme='dark' />
      
      <Main ref={ref}>
        {
          Work.map( d =>
            <Card key={d.id} data={d} >Work Data </Card>
          )
        }
      </Main>

      <Rotate ref={yinyang}>
        <YinYang width={80} height={80} fill={DarkTheme.text} />
      </Rotate>
      
        <BigTitle text="WORK" top='5%' right='10%' />
        <BigTitle text="WORK" top='60%' right='60%' />

    </Box>
    </ThemeProvider>

  )
}

export default WorkPage
