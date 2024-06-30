import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
    position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 40vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
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
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
`

const Intro = () => {
  return (
    <Box>
        intro
    </Box>
  )
}

export default Intro