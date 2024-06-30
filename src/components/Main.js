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
  left  : 2rem;
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
        <h3  target="_blank" to={{pathname:"mailto:omghumre74@gmail.com"}}>
          Say hello..
        </h3>
      </Contact>

      <BLOG to="/blog">
        <h3>
          Blog
        </h3>
      </BLOG>

      <WORK to="/work">
        <h3>
          Work
        </h3>
      </WORK>

      <WORK to="/work">
        <h3>
          Work
        </h3>
      </WORK>

      </Container>
    </MainContainer>
  )
}

export default Main
