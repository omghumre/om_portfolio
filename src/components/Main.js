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

const Main = () => {
  return (
    <MainContainer>
      <Container>
      <PowerButton/>
      <LogoComponent/>
      <SocialIcon/>

      <Contact target="_blank" href="mailto:omghumre74@gmail.com">
        <h3>
          Say hi..
        </h3>
      </Contact>

      </Container>
    </MainContainer>
  )
}

export default Main
